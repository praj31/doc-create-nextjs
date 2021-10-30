import { IoTrashOutline } from 'react-icons/io5'
import styles from '../styles/User.module.css'

interface Props {
  projectTitle: string
  projectDescription: string
  ctaLabel: string
  ctaAction: () => void
}

export const PublishedProjectCard: React.FunctionComponent<Props> = ({
  projectTitle,
  projectDescription,
  ctaLabel,
  ctaAction,
}): JSX.Element => {
  return (
    <div className={styles.projectcard}>
      <div className={styles.projectcard__header}>
        <p>{projectTitle}</p>
        <div>
          <IoTrashOutline />
        </div>
      </div>
      <div className={styles.projectcard__content}>
        <p>{projectDescription}</p>
      </div>
      <div className={styles.projectcard__action}>
        <button className="btn-primary" onClick={ctaAction}>
          {ctaLabel}
        </button>
      </div>
    </div>
  )
}
