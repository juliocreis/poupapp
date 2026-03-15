import { Formater } from '../Formater';
import styles from './transactionitem.module.css'

export function TransactionItem({ item }) {
  return (
    <div className={styles.transaction__item}>
      <div className={styles.info__item}>
        <p className={styles.item__description}>{item.description}</p>
        <p className={styles.item__value}><Formater value={item.value}></Formater></p>
      </div>
      <div>{item.date}</div>
    </div>
  );
}
