import { Formater } from "../Formater";
import { IconBank, IconWallet } from "../Icons";

export function AccountItem({ item }) {
    return (
        <div className="flex justify-between text-neutral-text">
            <p className="flex items-center justify-center gap-2 font-bold m-0 p-0 leading-[120%]">
                <IconBank />
                {item.bank}
            </p>
            <div className="w-[120px] leading-[120%] flex flex-col gap-2">
                <p className="font-bold">Saldo</p>
                <p className="font-[15px] font-light"><Formater value={item.balance} /></p>
            </div>
        </div>
    )
}