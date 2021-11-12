import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { DocProjectCard } from '../../../components/DocProjectCard'
import { Layout } from '../../../components/layout'
import { ActiveLinkContext } from '../../../context'
import { getpublishedProjects } from '../../../services/DocumentHandlers'
import { searchUser } from '../../../services/UserHandlers'
import styles from '../../../styles/Explore.module.css'

const DocUserProfile: React.FunctionComponent = (): JSX.Element => {
  const { setLink } = useContext(ActiveLinkContext)
  const [username, setusername] = useState()
  const [projects, setprojects] = useState<any>()
  const [data, setdata] = useState<any>()
  const router = useRouter()

  const fetchedUsername = router.query.username
  useEffect(() => setLink('explore'))
  useEffect(() => {
    const getData = async (username: any) => {
      try {
        const data = await searchUser(username)
        setdata(data.data.data[0])
        const projectData = await getpublishedProjects(data.data.data[0].id)
        setprojects(projectData.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    if (fetchedUsername) {
      getData(fetchedUsername)
    }
  }, [fetchedUsername])
  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <Layout>
        <div className={styles.profile}>
          <div className={styles.profile__avatar}>
            <img
              src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"
              alt="Profile Picture of User"
            />
          </div>
          <div className={styles.profile__header}>
            <h1>{data?.name}</h1>
            <h3>@{data?.username}</h3>
          </div>
          <div className={styles.profile__projects}>
            <h4>Published Projects</h4>
            <div className={styles.profile__projects__list}>
              {projects?.map((element: any, index: number) => (
                <DocProjectCard
                  key={index}
                  projectDescription={element.description}
                  projectTitle={element.documentName}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default DocUserProfile
