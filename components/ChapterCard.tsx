import Link from 'next/link'
import { IoSettingsOutline } from 'react-icons/io5'
import styles from '../styles/User.module.css'

interface Props {
  chapterTitle: string
  slug: string
  projectslug: string
  username: string
}

export const ChapterCard: React.FunctionComponent<Props> = ({
  chapterTitle,
  slug,
  projectslug,
  username,
}): JSX.Element => {
  return (
    <div className={styles.chaptercard}>
      <Link href={`/${username}/${projectslug}/${slug}/editor`}>
        <div className={styles.chaptercard__title}>{chapterTitle}</div>
      </Link>
      <div className={styles.chaptercard__action}>
        <IoSettingsOutline />
      </div>
    </div>
  )
}
