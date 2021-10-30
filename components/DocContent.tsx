import { IoBookmarkOutline } from 'react-icons/io5'
import styles from '../styles/Document.module.css'

export const DocContent: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h1 className={styles.chapter_title}>Introduction</h1>
        <div className={styles.meta}>
          <div className={styles.user_info}>Published By @username</div>
          <div className={styles.save}>
            <IoBookmarkOutline />
          </div>
        </div>
      </div>
      <div className={styles.chapter_content}>
        <h1>Sub Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          doloribus accusamus ipsa dicta culpa error, alias excepturi iure sit
          dolorem nesciunt fugiat, perferendis, ducimus placeat. Molestiae
          asperiores ea nulla consequuntur, natus architecto aut repudiandae
          voluptate esse expedita nobis magni cum eum aspernatur velit omnis
          aliquid? Placeat ipsam exercitationem cupiditate tempore dolorum
          impedit tenetur maiores, quisquam itaque consequatur cumque incidunt,
          officiis doloremque velit asperiores? Enim, animi. Nobis
          exercitationem quas fugit, possimus, enim voluptates debitis saepe,
          sequi dicta obcaecati sint. Reprehenderit recusandae laudantium odit
          deserunt necessitatibus quis eos quidem quos, hic nemo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          eveniet atque quisquam quidem quibusdam sit sapiente nulla voluptatum
          deleniti. Unde nisi praesentium amet rem eligendi repellendus
          doloribus est quaerat officia?
        </p>
        <h2>Sub Sub Title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          sint a magni cum fugit accusamus eaque debitis cupiditate facilis, nam
          corporis expedita asperiores molestias rerum, culpa, doloremque
          blanditiis architecto temporibus libero eveniet saepe. Eveniet quam in
          officiis numquam esse corporis, adipisci ipsa repellendus molestiae
          porro laudantium voluptate consectetur totam? Accusamus impedit
          molestias tempore culpa rem sit laboriosam perferendis magni
          blanditiis ullam exercitationem maxime quidem quasi, voluptate
          perspiciatis quo ex in nihil nisi ipsam dicta. Est quis reiciendis
          autem illo dolore quod, quam delectus minima nesciunt? Sequi tempore
          excepturi aliquid repellendus quas animi quo quam est amet saepe. Non,
          beatae quidem.
        </p>
        <h1>Sub Title</h1>
      </div>
    </div>
  )
}
