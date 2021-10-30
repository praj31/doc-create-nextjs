import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { useEffect, useState, useContext } from 'react'
import { Layout } from '../../components/layout'
import { ActiveLinkContext } from '../../context'
import { OngoingProjectCard } from '../../components/OngoingProjectCard'
import { IoAddOutline } from 'react-icons/io5'
import styles from '../../styles/User.module.css'
import { NewProjectModal } from '../../components/NewProjectModal'

const OngoingProjects: React.FunctionComponent = (): JSX.Element => {
  const { setLink } = useContext(ActiveLinkContext)

  const [showNewProjectModal, setShowNewProjectModal] = useState<boolean>(false)

  useEffect(() => {
    setLink('home')
  })

  const publish = () => {}

  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <Layout>
        <div className="grid-121">
          <div className={styles.navigation}>
            <Link href="/username/ongoing-projects">
              <div className={styles.activeTab}>Ongoing Projects</div>
            </Link>
            <Link href="/username/published-projects">
              <div>Published Projects</div>
            </Link>
          </div>
          <div className={styles.content}>
            <OngoingProjectCard
              projectTitle="Programming in C++"
              projectDescription="An introduction to object oriented programming using C++ for complete beginners."
              ctaLabel="Publish"
              ctaAction={publish}
            />
          </div>
          <div>
            <div
              className={styles.newProject}
              onClick={() => setShowNewProjectModal(true)}
            >
              <IoAddOutline />
              New Project
            </div>
            <NewProjectModal
              showModal={showNewProjectModal}
              setShowModal={setShowNewProjectModal}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default OngoingProjects
