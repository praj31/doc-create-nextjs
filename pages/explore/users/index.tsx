import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useContext } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { Layout } from '../../../components/layout'
import { ActiveLinkContext } from '../../../context'
import styles from '../../../styles/Explore.module.css'

const CommunityUsers: React.FunctionComponent = (): JSX.Element => {
  const { setLink } = useContext(ActiveLinkContext)

  useEffect(() => setLink('explore'))
  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <Layout>
        <div className={styles.header}>
          <div className={styles.navigation}>
            <Link href="/explore/docs">
              <div>Docs</div>
            </Link>
            <Link href="/explore/users">
              <div className={styles.activeTab}>Users</div>
            </Link>
          </div>
          <div className={`${styles.searchbar} searchbar`}>
            <div>
              <IoSearchOutline />
            </div>
            <input type="text" placeholder="Search users on community" />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CommunityUsers
