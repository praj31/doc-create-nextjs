import Head from 'next/head'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Layout } from '../../../components/layout'
import { ActiveLinkContext } from '../../../context'
import styles from '../../../styles/Explore.module.css'

const DocUserProfile: React.FunctionComponent = (): JSX.Element => {
  const { setLink } = useContext(ActiveLinkContext)

  useEffect(() => setLink('explore'))
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
            <h1>Creator Name</h1>
            <h3>@username</h3>
          </div>
          <div className={styles.profile__projects}>
            <h4>Published Projects</h4>
            <div className={styles.profile__projects__list}></div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default DocUserProfile
