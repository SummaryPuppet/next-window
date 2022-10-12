import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { useDispatch } from "react-redux";
import { delWindow } from "../features/windows/windowSlice";

function Window({ name = "", children }) {
  const controls = useDragControls();
  const dispatch = useDispatch();

  const startDrag = (event) => {
    controls.start(event);
  };

  return (
    <AnimatePresence>
      <motion.div
        drag
        dragControls={controls}
        dragListener={false}
        exit={{ opacity: 0 }}
        className="border-2 absolute rounded-md min-h-10 min-w-10 max-w-10 "
      >
        <header
          onPointerDown={startDrag}
          className="p-1 bg-gray-100 flex justify-between hover:bg-gray-200"
        >
          {name}
          <div>
            <motion.button onClick={() => dispatch(delWindow({ name }))} whileHover={{ scale: 1.2 }}>x</motion.button>
          </div>
        </header>

        <section className="bg-white h-full w-full overflow-auto resize">
          {children}
        </section>
      </motion.div>
    </AnimatePresence>
  );
}

export default Window;
