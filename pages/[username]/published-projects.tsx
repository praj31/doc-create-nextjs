import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Layout } from '../../components/layout'
import { ActiveLinkContext } from '../../context'
import { PublishedProjectCard } from '../../components/PublishedProjectCard'
import styles from '../../styles/User.module.css'

const PublishedProjects: React.FunctionComponent = (): JSX.Element => {
  const { setLink } = useContext(ActiveLinkContext)

  useEffect(() => setLink('home'))

  const edit = () => {}

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
            <PublishedProjectCard
              projectTitle="React Music Player"
              projectDescription="A music player built using React Typescript."
              ctaLabel="Edit Project"
              ctaAction={edit}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PublishedProjects
