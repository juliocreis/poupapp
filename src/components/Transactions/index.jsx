import { Button } from "../Button";
import { IconCurrency } from "../Icons";
import { TransactionsItem } from "../TransactionsItem";

const transactions = [
  {
    description: "iFood",
    value: -20,
    date: "2024-10-01T00:00:00-03:00",
  },
  {
    description: "Papelaria Mila",
    value: -80,
    date: "2024-10-03T00:00:00-03:00",
  },
  {
    description: "Freela (2ª parte)",
    value: 1000,
    date: "2024-10-03T00:00:00-03:00",
  },
  {
    description: "Magazine Luiza",
    value: -300,
    date: "2024-10-05T00:00:00-03:00",
  },
];

export function Transactions() {
  return (
    <div className="w-full flex flex-col gap-8">
      <ul className="flex flex-col gap-4">
        {transactions.map((transactionsItem, index) => {
          return (
            <li
              key={index}
              className="border-b border-be-neutral-header pbe-4 last:border-b-0"
            >
              <TransactionsItem item={transactionsItem}></TransactionsItem>
            </li>
          );
        })}
      </ul>
      <Button className="text-neutral-text border border-neutral-text rounded-3xl flex items-center gap-2 px-8 py-[11px] mx-auto cursor-pointer">
        <IconCurrency />
        Adicionar transação
      </Button>
    </div>
  );
}
