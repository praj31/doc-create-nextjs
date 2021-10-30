import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { Layout } from '../../../components/layout'
import { IoAddOutline, IoChevronBackOutline } from 'react-icons/io5'
import { NewChapterModal } from '../../../components/NewChapterModal'
import { ChapterCard } from '../../../components/ChapterCard'
import styles from '../../../styles/User.module.css'

const Project: React.FunctionComponent = (): JSX.Element => {
  const [showNewChapterModal, setShowNewChapterModal] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <Layout>
        <div className="grid-121">
          <div className={styles.navigate_back}>
            <Link href="/username/ongoing-projects">
              <div>
                <IoChevronBackOutline /> Back to Projects
              </div>
            </Link>
          </div>
          <div className={styles.content}>
            <ChapterCard chapterTitle="Introduction" />
            <ChapterCard chapterTitle="Comments, Variables and Datatypes" />
            <ChapterCard chapterTitle="Operators" />
            <ChapterCard chapterTitle="Decision Making Syntax" />
            <ChapterCard chapterTitle="Looping" />
            <ChapterCard chapterTitle="Class and Object" />
          </div>
          <div>
            <div
              className={styles.newChapter}
              onClick={() => setShowNewChapterModal(true)}
            >
              <IoAddOutline />
              New Chapter
            </div>
            <NewChapterModal
              showModal={showNewChapterModal}
              setShowModal={setShowNewChapterModal}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Project
