import { Formater } from "../Formater"

export function DailyBudget({ value }) {
    return (
        <p className='text-[39px] text-primary-highlight font-bold'><Formater value={value}></Formater></p>
    )
    
}