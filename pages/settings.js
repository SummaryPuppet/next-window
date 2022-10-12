import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowReturnLeft } from "react-icons/bs";
import useSettings from "../hooks/settings/useSettings"

export default function Settings() {
  const { settingsInPage, settingsOption }  = useSettings()

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>

      <div className="h-screen bg-slate-600">
        <header className="flex items-center bg-slate-700 p-2">
          <Link href="/">
            <BsArrowReturnLeft />
          </Link>
          <h1 className="text-5xl text-neutral-200">Settings</h1>
        </header>

        <main className="grid grid-cols-5 pt-1 px-1 gap-2">
          <aside className="grid-end-2 flex flex-col gap-1">
            {settingsOption.map((setting, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                onClick={setting.click}
                className="py-1 bg-slate-700"
              >
                {setting.name}
              </motion.button>
            ))}
          </aside>
          <section>{settingsInPage}</section>
        </main>
      </div>
    </>
  );
}
