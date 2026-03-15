import { Formater } from '../Formater';
import styles from './transactionitem.module.css'

export function TransactionItem({ item }) {
  const data = new Date(item.date).toLocaleDateString()

  return (
    <div className={styles.transaction__item}>
      <div className={styles.info__item}>
        <p className={styles.item__description}>{item.description}</p>
        <p className={styles.item__value}><Formater value={item.value}></Formater></p>
      </div>
      <div className={styles.item__date}>{data}</div>
    </div>
  );
}
