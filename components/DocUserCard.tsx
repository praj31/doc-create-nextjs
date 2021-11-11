import styles from '../styles/Explore.module.css'

interface Props {
  username: string
  fullname: string
  bio: string
}

export const DocUserCard: React.FunctionComponent<Props> = ({
  username,
  fullname,
  bio,
}): JSX.Element => {
  return (
    <div className={styles.docusercard}>
      <div className={styles.docusercard__header}>
        <p>{fullname}</p>
      </div>
      <div className={styles.docusercard__creator}>
        <div className={styles.docusercard__creator__info}>@{username}</div>
      </div>
      <div className={styles.docusercard__content}>
        <p>{bio}</p>
      </div>
      <div className={styles.action}>
        <button className="btn-primary">View Profile</button>
      </div>
    </div>
  )
}
