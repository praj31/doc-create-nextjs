import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useContext } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { Layout } from '../../../components/layout'
import { ActiveLinkContext } from '../../../context'
import { queryDocument } from '../../../services/DocumentHandlers'
import styles from '../../../styles/Explore.module.css'

const Docs: React.FunctionComponent = (): JSX.Element => {
  const { setLink } = useContext(ActiveLinkContext)

  useEffect(() => setLink('explore'))

  const onChangeData = async (e: any) => {
    const query = e.target.value
    const data = await queryDocument(query)
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
              <div className={styles.activeTab}>Docs</div>
            </Link>
            <Link href="/explore/users">
              <div>Users</div>
            </Link>
          </div>
          <div className={`${styles.searchbar} searchbar`}>
            <div>
              <IoSearchOutline />
            </div>
            <input
              onChange={onChangeData}
              type="text"
              placeholder="Search docs on community"
            />
          </div>
        </div>
        <div className={styles.searched_content}></div>
      </Layout>
    </>
  )
}

export default Docs
