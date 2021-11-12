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
import { getJSONCookie } from '../../utils/cookie-helper'
import { getProjects, updateProject } from '../../services/DocumentHandlers'

const OngoingProjects: React.FunctionComponent = (): JSX.Element => {
  const { setLink } = useContext(ActiveLinkContext)
  const [documents, setdocuments] = useState([])
  const [showNewProjectModal, setShowNewProjectModal] = useState<boolean>(false)
  const [username, setusername] = useState('')

  useEffect(() => {
    const user = getJSONCookie('user')
    setusername(user.username)
    getData()
    setLink('home')
  }, [])

  const getData = async () => {
    const data = await getProjects()
    console.log(data.data.data)
    setdocuments(data.data.data)
  }

  const changeStatus = async (item: any, index: number) => {
    try {
      await updateProject(item.slug, 'Published')
      let newData = await getProjects()
      setdocuments(newData.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <Layout>
        <div className="grid-121">
          <div className={styles.navigation}>
            <Link href={`/${username}/ongoing-projects`}>
              <div className={styles.activeTab}>Ongoing Projects</div>
            </Link>
            <Link href={`/${username}/published-projects`}>
              <div>Published Projects</div>
            </Link>
          </div>
          <div className={styles.content}>
            {documents.map(
              (item: any, index: number) =>
                item.status === 'ongoing' && (
                  <OngoingProjectCard
                    key={index}
                    id={item.slug}
                    username={username}
                    projectTitle={item.documentName}
                    projectDescription={item.description}
                    ctaLabel={item.status === 'ongoing' ? 'Publish' : 'Ongoing'}
                    ctaAction={() => changeStatus(item, index)}
                  />
                )
            )}
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
