import styles from "./BotaoVoltar.module.css";
import { HashLink } from "react-router-hash-link";

 function BotaoVoltar() {
  return (
    <HashLink to={"/TiposAbusos#TiposAbusos"} className={styles.btoVoltar}>
      <p className={styles.p}>Voltar ao topo</p>
    </HashLink>
  )
};

export default BotaoVoltar;
