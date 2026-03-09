import styles from './main.module.css'

export function Main({ children }) {
    return (
        <>
        <div className={styles.main}>
            {children}
        </div>
        </>
    )
}