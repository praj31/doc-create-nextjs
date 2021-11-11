import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoSettingsOutline } from 'react-icons/io5'
import styles from '../styles/User.module.css'

interface Props {
  projectTitle: string
  projectDescription: string
  id: string
  ctaLabel: string
  ctaAction: () => void
}

export const OngoingProjectCard: React.FunctionComponent<Props> = ({
  projectTitle,
  id,
  projectDescription,
  ctaLabel,
  ctaAction,
}): JSX.Element => {
  const history = useRouter()
  return (
    <div className={styles.projectcard}>
      <div className={styles.projectcard__header}>
        <p>{projectTitle}</p>
        <div>
          <IoSettingsOutline />
        </div>
      </div>
      <div className={styles.projectcard__content}>
        <p>{projectDescription}</p>
      </div>
      <div className={styles.projectcard__action}>
        <Link href={`/username/${id}`}>
          <button className="btn-secondary">Edit</button>
        </Link>
        <button className="btn-primary" onClick={ctaAction}>
          {ctaLabel}
        </button>
      </div>
    </div>
  )
}
