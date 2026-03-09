import styles from "./aside.module.css";
import logo from '../../assets/logo.svg'

export function Aside() {
  return (
    <>
      <aside className={styles.aside}>
        <img src={logo} alt="Logo do Poupapp"/>
        <footer className={styles.footer}>
            Desenvolvido por Júlio Reis.
        </footer>
      </aside>
    </>
  );
}
