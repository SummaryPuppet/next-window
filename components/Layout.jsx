import Head from "next/head";
import { useSelector } from "react-redux";
import WinBar from "/components/WinBar";

export default function Layout({
  children,
  title = "SP Window",
  mainClass = "",
}) {
  const setting = useSelector((state) => state.setting.background);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Similar to window sistem but do in js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`h-screen ${mainClass}`} style={setting}>
        {children}
      </main>

      <WinBar />
    </>
  );
}
