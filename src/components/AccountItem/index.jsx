import { Formater } from "../Formater";
import { IconBank } from "../Icons";
import styles from "./accountitem.module.css";

export function AccountItem({ item }) {
  return (
    <div className={styles.account__item}>
      <p className={`${styles.item__bank}`}>
        <IconBank /> {item.bank}
      </p>

      <div className={styles.item__balance}>
        <p className={styles.balance__text}>Saldo</p>
        <p>
          <Formater value={item.balance}></Formater>
        </p>
      </div>
    </div>
  );
}
