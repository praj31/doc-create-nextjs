import styles from '../styles/Explore.module.css'

interface Props {
  projectTitle: string
  projectDescription: string
  // creatorname: string
  // username: string
}

export const DocProjectCard: React.FunctionComponent<Props> = ({
  projectTitle,
  projectDescription,
  // creatorname,
  // username,
}): JSX.Element => {
  return (
    <div className={styles.docprojectcard}>
      <div className={styles.docprojectcard__header}>
        <p>{projectTitle}</p>
      </div>
      <div className={styles.docprojectcard__creator}>
        {/* <div className={styles.docprojectcard__creator__info}>
          {creatorname} &bull; @{username}
        </div> */}
      </div>
      <div className={styles.docprojectcard__content}>
        <p>{projectDescription}</p>
      </div>
      <div className={styles.action}>
        <button className="btn-primary">Visit</button>
      </div>
    </div>
  )
}
