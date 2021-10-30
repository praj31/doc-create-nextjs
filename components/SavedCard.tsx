import { IoTrashOutline } from 'react-icons/io5'
import styles from '../styles/User.module.css'

interface Props {
  projectTitle: string
  projectDescription: string
}

export const SavedCard: React.FunctionComponent<Props> = ({
  projectTitle,
  projectDescription,
}): JSX.Element => {
  return (
    <div className={styles.savedcard}>
      <div className={styles.savedcard__header}>
        <p>{projectTitle}</p>
        <div>
          <IoTrashOutline />
        </div>
      </div>
      <div className={styles.savedcard__creator}>
        <div className={styles.savedcard__creator__info}>
          Creator Name &bull; @username
        </div>
      </div>
      <div className={styles.savedcard__content}>
        <p>{projectDescription}</p>
      </div>
      <div className={styles.action}>
        <button className="btn-primary">Visit</button>
      </div>
    </div>
  )
}
