import { Formater } from "../Formater";

export function TransactionsItem({ item }) {
  const date = new Date(item.date).toLocaleDateString();

  const greenColor = "text-secondary-income";
  const orangeColor = "text-secondary-expense";
  const itemColor = item.value >= 0 ? greenColor : orangeColor;

  const plusMinus = item.value > 0 ? "+" : "";

  return (
    <div className="flex justify-between w-full">
      <div className={itemColor}>
        <p className="font-bold">{item.description}</p>
        <p>
          {plusMinus}
          <Formater value={item.value} />
        </p>
      </div>
      <p className="text-neutral-text font-[15px] leading-[120%]">{date}</p>
    </div>
  );
}
