import styles from "./accounts.module.css";
import accounts from "../../../accounts.json";
import { AccountItem } from "../AccountItem";
import { Button } from "../Button";
import { IconWallet } from "../Icons";

export function Accounts() {
  return (
    <div className={styles.accounts}>
      <ul className={styles.lista}>
        {accounts.map((accountItem, index) => {
          return (
            <li key={index} className={styles.item}>
              <AccountItem item={accountItem} />
            </li>
          );
        })}
      </ul>

      <div className={styles.button}>
        <Button>
          <IconWallet /> Adicionar conta
        </Button>
      </div>
    </div>
  );
}
