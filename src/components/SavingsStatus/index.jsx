import styles from './savingstatus.module.css'
import { IconSavings } from '../Icons'

export function SavingStatus({ percent }) {
    return (
        <div className={styles.container}>
            <p>
                <IconSavings /> Economizar
            </p>
        </div>
    )
}