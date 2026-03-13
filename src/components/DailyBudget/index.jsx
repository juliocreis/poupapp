import styles from "./dailybudget.module.css";

const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function DailyBudget({ value }) {
  return <p className={styles.daily}>{formater.format(value)}</p>;
}
