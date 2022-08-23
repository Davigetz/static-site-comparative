import { useMemo } from "react";
import { Jujutsu } from "../types";
import estilos from "./table.module.css";
interface PropsRow {
  jujutsu: Jujutsu;
  overallRankings: Jujutsu[];
}

const JujutsuRow = ({ jujutsu, overallRankings }: PropsRow) => (
  <tr>
    <td>{jujutsu.nombre}</td>
    <td>{jujutsu.Grado}</td>
    <td>{jujutsu.Altura}</td>
    <td>{jujutsu.Cumpleaños}</td>
    <td>{jujutsu.Clan}</td>
    <td>{jujutsu.Edad}</td>
    <td>{jujutsu.Estado}</td>
    {/* <td>{jujutsu.Familia}</td> */}
    <td>{jujutsu.Género}</td>
    {/* <td>{jujutsu.Ocupación}</td> */}
    <td>{jujutsu.Signo}</td>
    <td>
      #{overallRankings.findIndex((p) => p.nombre === jujutsu.nombre) + 1}
    </td>
  </tr>
);

interface PropsTable {
  jujutsu: Jujutsu[];
  overallRankings: Jujutsu[];
}

const JujutsuTable = ({ jujutsu, overallRankings }: PropsTable) => (
  <table>
    <tbody className={estilos.tables}>
      {jujutsu.map((j, i) => (
        <JujutsuRow key={i} jujutsu={j} overallRankings={overallRankings} />
      ))}
    </tbody>
  </table>
);

interface PropsList {
  jujutsu: Jujutsu[];
}

const JujutsuList = ({ jujutsu }: PropsList) => {
  const overallRankings = useMemo(
    () =>
      jujutsu.sort((a, b) => {
        let fa = a.nombre.toLowerCase(),
          fb = b.nombre.toLowerCase();

        if (fb < fa) return -1;
        if (fb > fa) return 1;

        return 0;
      }),
    [jujutsu]
  );

  return (
    <div style={{ display: "flex" }}>
      <JujutsuTable
        jujutsu={overallRankings}
        overallRankings={overallRankings}
      />
    </div>
  );
};

export default JujutsuList;
