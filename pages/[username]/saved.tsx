import Head from 'next/head'
import { useEffect } from 'react'
import { useContext } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { Layout } from '../../components/layout'
import { SavedCard } from '../../components/SavedCard'
import { ActiveLinkContext } from '../../context'

const Saved: React.FunctionComponent = (): JSX.Element => {
  const { setLink } = useContext(ActiveLinkContext)

  useEffect(() => setLink('saved'))

  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <Layout>
        <div className="searchbar" style={{ marginBottom: '2rem' }}>
          <div>
            <IoSearchOutline />
          </div>
          <input type="text" placeholder="Search saved projects" />
        </div>
        <SavedCard
          projectTitle="Project Title"
          projectDescription="A simple description of the project in limited number of characters."
        />
      </Layout>
    </>
  )
}

export default Saved
