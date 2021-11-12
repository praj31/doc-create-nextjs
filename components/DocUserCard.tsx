import styles from '../styles/Explore.module.css'
import Link from 'next/link'
interface Props {
  username: string
  fullname: string
}

export const DocUserCard: React.FunctionComponent<Props> = ({
  username,
  fullname,
}): JSX.Element => {
  return (
    <div className={styles.docusercard}>
      <div className={styles.docusercard__header}>
        <p>{fullname}</p>
      </div>
      <div className={styles.docusercard__creator}>
        <div className={styles.docusercard__creator__info}>@{username}</div>
      </div>
      <div className={styles.action}>
        <Link href={`/explore/users/${username}`}>
          <button className="btn-primary">View Profile</button>
        </Link>
      </div>
    </div>
  )
}
