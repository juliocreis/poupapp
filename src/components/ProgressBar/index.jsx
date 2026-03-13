import styles from './progressbar.module.css'

export function ProgressBar({ percent }) {
    return (
        <div className={styles.wrapper}>
            <div 
                className={styles.filled}
                style={{
                    width:`${percent}%`}}
            >
            {percent}%
            </div>
        </div>
    )
}