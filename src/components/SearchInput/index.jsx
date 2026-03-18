import { IconSearch } from "../Icons";

export function SearchInput(props) {
    return (
        <div className="flex gap-4 items-center h-[56px] bg-neutral-surface w-full rounded-lg px-4 py-3 mt-20">
            <IconSearch/>
            <input {...props} className="text-neutral-text w-[90%] text-[22px] placeholder-neutral-text leading-[150%]"/>
        </div>
    )
}