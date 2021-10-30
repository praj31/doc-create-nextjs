import styles from '../styles/Document.module.css'

export const DocSidebar: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.navigation}>
      <div className={styles.activeTab}>Introduction</div>
      <div>Comments, Variables and Datatypes</div>
      <div>Operators</div>
      <div>Decision Making Syntax</div>
      <div>Looping</div>
      <div>Class and Object</div>
    </div>
  )
}
