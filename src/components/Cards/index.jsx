export function Card({ children }) {
    return (
        <div className="bg-neutral-surface w-[435px] min-h-[171px] rounded-3xl">
            {children}
        </div>
    )
}

export function Header({ children }) {
    return (
        <div className="bg-neutral-header h-[56px] rounded-t-3xl text-[19px] text-neutral-text font-bold p-4 text-center" >
            {children}
        </div>
    )
}

export function Body({ children }) {
    return (
        <div className="flex justify-center py-8 px-4 min-h-[160px] items-center">
            {children}
        </div>
    )
}

Card.Header = Header;
Card.Body = Body

export default Card