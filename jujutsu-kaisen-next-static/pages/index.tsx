import type { NextPage } from "next";
import JujutsuList from "../components/JujutsuList";
import Login from "../components/Login";
import { Jujutsu } from "../types";
import jujutsu from "./jujutsu-taisen.json";

export function getStaticProps() {
  return {
    props: {
      jujutsu,
    },
  };
}

const Home: NextPage<{ jujutsu: Jujutsu[] }> = ({
  jujutsu,
}: {
  jujutsu: Jujutsu[];
}) => {
  return (
    <div>
      <Login />
      <JujutsuList jujutsu={jujutsu} />
    </div>
  );
};

export default Home;
