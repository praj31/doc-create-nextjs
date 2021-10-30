import Link from 'next/link'
import { IoSettingsOutline } from 'react-icons/io5'
import styles from '../styles/User.module.css'

interface Props {
  chapterTitle: string
}

export const ChapterCard: React.FunctionComponent<Props> = ({
  chapterTitle,
}): JSX.Element => {
  return (
    <div className={styles.chaptercard}>
      <Link href="/username/project-name/chapter-name/editor">
        <div className={styles.chaptercard__title}>{chapterTitle}</div>
      </Link>
      <div className={styles.chaptercard__action}>
        <IoSettingsOutline />
      </div>
    </div>
  )
}
