import styles from "./daily-budget.module.css";

const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function DailyBudget({ value }) {
  return <p className={styles.p}>{formater.format(value)}</p>;
}
