import styles from './card.module.css'

export function Card({ children }) {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

export function Header({ children }) {
    return (
        <div className={styles.header}>
            {children}
        </div>
    )
}

export function Body({ children }) {
    return (
        <div className={styles.body}>
            {children}
        </div>
    )
}

Card.Header = Header;
Card.Body = Body;

export default Card