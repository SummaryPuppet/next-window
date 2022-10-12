import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import Window from "../components/Window";
import PGCalculator from "../programs/PGCalculator"

export default function Home() {
  const win = useSelector((state) => state.win.entities);

  return (
    <Layout mainStyle="bg-slate-900">
      {win.map((win, index) => (
        <Window name={win.name} key={index}>
          <PGCalculator /> 
          </Window>
      ))}
    </Layout>
  );
}
