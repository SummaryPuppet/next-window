import { useDispatch } from "react-redux";
import { addWindow } from "../features/windows/windowSlice";
import { AiFillWindows } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsFillCalculatorFill } from "react-icons/bs";
import Link from "next/link";

function BottomBar() {
  const dispatch = useDispatch();
  const programs = [
    {
      name: "start",
      icon: <AiFillWindows />,
    },
    {
      name: "calculator",
      icon: <BsFillCalculatorFill />,
    },
  ];

  return (
    <footer className="absolute bottom-0 w-screen p-2 flex justify-center bg-black">
      <div className="text-neutral-100 flex gap-3">
        {programs.map((program, index) => (
          <motion.button
            whileHover={{ scale: 1.2 }}
            key={index}
            onClick={() => dispatch(addWindow({ name: program.name }))}
          >
            {program.icon}
          </motion.button>
        ))}
        <Link href="/settings">setting</Link>
      </div>
    </footer>
  );
}

export default BottomBar;
