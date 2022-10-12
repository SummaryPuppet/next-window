import { useDispatch, useSelector } from "react-redux";
import { addWindow } from "../features/windows/windowSlice";
import { AiFillWindows, AiFillSetting } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsFillCalculatorFill } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";

function BottomBar() {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const bar = useSelector((state) => state.setting.bar);
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

  const getDate = () => {
    let date = new Date();

    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const hour = date.getHours();
    const minutes = date.getMinutes();

    setHour(hour + ":" + minutes);
    setDate(day + "/" + month + "/" + year);
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <footer
      style={{ backgroundColor: bar.color }}
      className={`absolute w-screen p-2 flex justify-between ${bar.position}`}
    >
      <nav className="text-neutral-100 flex gap-3">
        {programs.map((program, index) => (
          <motion.button
            whileHover={{ scale: 1.2 }}
            key={index}
            onClick={() => dispatch(addWindow({ name: program.name }))}
          >
            {program.icon}
          </motion.button>
        ))}
        <Link href="/settings">
          <AiFillSetting />
        </Link>
      </nav>

      <section className="text-neutral-200 flex gap-3">
        <p>{hour}</p>
        <p>{date}</p>
      </section>
    </footer>
  );
}

export default BottomBar;
