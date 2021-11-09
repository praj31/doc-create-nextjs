import Head from 'next/head'
import Link from 'next/link'
import { EventHandler, useEffect } from 'react'
import { useContext } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { Layout } from '../../../components/layout'
import { ActiveLinkContext } from '../../../context'
import { searchUser } from '../../../services/UserHandlers'
import styles from '../../../styles/Explore.module.css'

const CommunityUsers: React.FunctionComponent = (): JSX.Element => {
  const { setLink } = useContext(ActiveLinkContext)

  useEffect(() => {
    setLink('explore')
  }, [])

  const onChangeData = async (e: any) => {
    const query = e.target.value
    console.log('Data ', query)
    const data = await searchUser(query)
    console.log('data --- ', data.data.data)
  }

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
            <input
              onChange={onChangeData}
              type="text"
              placeholder="Search users on community"
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CommunityUsers
