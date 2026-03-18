const TAGS = {
    h1: 'h1',
    p: 'p'
}

const VARIANT_CLASS = {
    h1: 'text-[31px] leading-[120%] font-bold text-neutral-text',
    p: 'text-[16px] leading-[120%] font-normal text-neutral-text'
}

export function Typography({ variant, children }) {
    const Component = TAGS[variant] || TAGS.p;
    const className = VARIANT_CLASS[variant] || VARIANT_CLASS.p

    return (
        <Component className={className}>
            {children}
        </Component>
    )
}