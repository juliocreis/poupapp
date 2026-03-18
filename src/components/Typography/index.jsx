const TAGS = {
    h1: 'h1',
    p: 'p'
}

export function Typography({ variant, children }) {
    const Component = TAGS[variant] || 'p';
    const variantClass = Component == 'h1' ? 
        'text-[31px] leading-[120%] font-bold text-neutral-text' : 
        'text-[16px] leading-[120%] font-normal text-neutral-text'
    return (
        <Component className={variantClass}>
            {children}
        </Component>
    )
}