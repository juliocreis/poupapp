import { AccountItem } from "../AccountItem";
import { Button } from "../Button";
import { IconWallet } from "../Icons";

const banks = [
  {
    bank: "Anybank",
    balance: 1200,
  },
  {
    bank: "Bytebank",
    balance: 800,
  },
  {
    bank: "Switch Bank",
    balance: 1800,
  },
];

export function Accounts() {
  return (
    <div className="w-full flex flex-col gap-41">
      <ul className="flex flex-col gap-4">
        {banks.map((account, index) => {
          return (
            <li key={index}>
              <AccountItem item={account}></AccountItem>
            </li>
          );
        })}
      </ul>

      <Button>
        <IconWallet />
        Adicionar conta
      </Button>
    </div>
  );
}
