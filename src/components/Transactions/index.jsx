import { Button } from "../Button";
import { IconCurrency } from "../Icons";
import { TransactionItem } from "../TransactionItem";
import styles from './transactions.module.css'
import items from '../../../transactions.json'

export function Transactions() {
  return (
    <>
    <ul className={styles.lista}>
      {items.map((transactionItem, index) => {
        return (
          <li key={index} className={styles.item}>
            <TransactionItem item={transactionItem} />
          </li>
        );
      })}
    </ul>
    
    <Button>
      <IconCurrency /> Adicionar transação
    </Button>
    </>
  );
}
