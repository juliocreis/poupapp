import styles from './savingstatus.module.css'
import { IconSavings } from '../Icons'
import { ProgressBar } from '../ProgressBar'

export function SavingStatus({ percent }) {
    return (
        <div className={styles.container}>
            <p>
                <IconSavings /> Economizar
            </p>
            <ProgressBar percent={percent} />
        </div>
    )
}