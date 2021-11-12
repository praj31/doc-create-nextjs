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
import { getJSONCookie } from '../../../utils/cookie-helper'

const Project: React.FunctionComponent = (): JSX.Element => {
  const [showNewChapterModal, setShowNewChapterModal] = useState<boolean>(false)
  const location = useRouter()
  const [titles, settitles] = useState([])
  const docId = location.query['project-name']
  const [username, setusername] = useState('')
  const [projectslug, setprojectSlug] = useState('')

  useEffect(() => {
    const getTitles = async (docId: any) => {
      const data = await getTitlesOfDocument(docId)
      console.log('Data ---- ', data.data.data)
      settitles(data.data.data)
    }
    if (docId) {
      const projectSlug = docId?.toString()
      setprojectSlug(projectSlug)
      const doc = docId?.toString().split('--')[1]
      getTitles(doc)
    }
    const user = getJSONCookie('user')
    setusername(user.username)
  }, [docId])

  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <Layout>
        <div className="grid-121">
          <div className={styles.navigate_back}>
            <Link href={`/${username}/ongoing-projects`}>
              <div>
                <IoChevronBackOutline /> Back to Projects
              </div>
            </Link>
          </div>
          <div className={styles.content}>
            {titles?.map((item: any, index: number) => (
              <ChapterCard
                key={index}
                username={username}
                projectslug={projectslug}
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
              orderNo={titles.length + 1}
              documentId={docId?.toString().split('--')[1]}
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
