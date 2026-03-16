import { Formater } from "../Formater";
import styles from "./dailybudget.module.css";

export function DailyBudget({ value }) {
  return <p className={styles.daily}><Formater value={value}></Formater></p>;
}
