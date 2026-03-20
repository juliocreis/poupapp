export function Button({ children, ...props}) {
    return (
        <button className="text-neutral-text border border-neutral-text rounded-3xl flex items-center gap-2 px-8 py-[11px] mx-auto cursor-pointer" {...props}>{children}</button>
    )
}