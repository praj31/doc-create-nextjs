import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Layout } from '../../../components/layout'
import { IoAddOutline, IoChevronBackOutline } from 'react-icons/io5'
import { NewChapterModal } from '../../../components/NewChapterModal'
import { ChapterCard } from '../../../components/ChapterCard'
import styles from '../../../styles/User.module.css'
import { getTitlesOfDocument } from '../../../services/DocumentHandlers'
import { useRouter } from 'next/router'

const Project: React.FunctionComponent = (): JSX.Element => {
  const [showNewChapterModal, setShowNewChapterModal] = useState<boolean>(false)
  const location = useRouter()
  const [titles, settitles] = useState([])
  useEffect(() => {
    const getTitles = async (docId: any) => {
      const data = await getTitlesOfDocument(docId)
      console.log('Data ---- ', data.data.data)
      settitles(data.data.data)
    }
    const docId = location.query['project-name']
    getTitles(docId)
  }, [])

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
            {titles.map((item: any, index: number) => (
              <ChapterCard
                key={index}
                chapterTitle={item.title}
                slug={item.slug}
              />
            ))}
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
