import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Layout } from '../../components/layout'
import { ActiveLinkContext } from '../../context'
import { PublishedProjectCard } from '../../components/PublishedProjectCard'
import styles from '../../styles/User.module.css'
import { getJSONCookie } from '../../utils/cookie-helper'
import {
  getpublishedProjects,
  updateProject,
} from '../../services/DocumentHandlers'

const PublishedProjects: React.FunctionComponent = (): JSX.Element => {
  const { setLink } = useContext(ActiveLinkContext)
  const [publishedDocs, setpublishedDocs] = useState([])
  useEffect(() => {
    data()
    setLink('home')
  }, [])

  const data = async () => {
    const user = getJSONCookie('user')
    const data = await getpublishedProjects(user.id)
    setpublishedDocs(data.data.data)
  }

  const edit = async (item: any, index: number) => {
    try {
      await updateProject(item.slug, 'ongoing')
      data()
    } catch (error) {}
  }

  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <Layout>
        <div className="grid-121">
          <div className={styles.navigation}>
            <Link href="/username/ongoing-projects">
              <div>Ongoing Projects</div>
            </Link>
            <Link href="/username/published-projects">
              <div className={styles.activeTab}>Published Projects</div>
            </Link>
          </div>
          <div className={styles.content}>
            {publishedDocs.map((item: any, index) => (
              <PublishedProjectCard
                key={index}
                projectTitle={item.documentName}
                projectDescription={item.description}
                ctaLabel="Edit Project"
                ctaAction={() => edit(item, index)}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PublishedProjects
