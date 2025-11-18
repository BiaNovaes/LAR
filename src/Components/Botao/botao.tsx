import styles from "./botao.module.css";
import { Link } from "react-router-dom";

 function BotaoSOS() {
  return (
    <Link to={"/sos"} className={styles.sos}>
      <p className={styles.p}>S.O.S</p>
    </Link>
  );
}

export default BotaoSOS;
