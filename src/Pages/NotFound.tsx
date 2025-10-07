import styles from '../Style/NotFound.module.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.containerr}>
      <div className={styles.icon}>🚫</div>
      <div className={styles.message}>Oops! Rota não encontrada.</div>
      <button className={styles.button} onClick={() => navigate('/')}>
        Voltar para a Home
      </button>
    </div>
  );
}

export default NotFound;
