import styles from '../styles/Document.module.css'

interface Props {
  titles: any[]
  currentChapter: any
  changeChapter: any
}

export const DocSidebar: React.FunctionComponent<Props> = ({
  titles,
  currentChapter,
  changeChapter,
}): JSX.Element => {
  return (
    <div className={styles.navigation}>
      {titles.map((element, index: number) => (
        <div
          onClick={() => changeChapter(index)}
          // className={index === currentChapter ? styles.activeTab : ''}
          key={index}
        >
          {element.title}
        </div>
      ))}
    </div>
  )
}
