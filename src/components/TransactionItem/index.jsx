import { Formater } from '../Formater';
import styles from './transactionitem.module.css'

export function TransactionItem({ item }) {
  const data = new Date(item.date).toLocaleDateString()
  const color = item.value > 1 ? styles.item__green : styles.item__orange

  return (
    <div className={styles.transaction__item}>
      <div className={styles.info__item}>
        <p className={`${styles.item__description} ${color}`}>{item.description}</p>
        <p className={color}><Formater value={item.value}></Formater></p>
      </div>
      <div className={styles.item__date}>{data}</div>
    </div>
  );
}
