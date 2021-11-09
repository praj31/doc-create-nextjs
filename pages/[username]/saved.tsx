import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { Layout } from '../../components/layout'
import { SavedCard } from '../../components/SavedCard'
import { ActiveLinkContext } from '../../context'
import { searchDocument } from '../../services/DocumentHandlers'
import { getJSONCookie } from '../../utils/cookie-helper'

const Saved: React.FunctionComponent = (): JSX.Element => {
  const { setLink } = useContext(ActiveLinkContext)
  const [data, setdata] = useState<any[]>([])
  useEffect(() => {
    setLink('saved')
    const user = getJSONCookie('user')
    getData(user.bookmarks)
  }, [])

  const getData = (bookmarks: string[]) => {
    let finalData: any[] = []
    bookmarks.forEach(async (element) => {
      const data = await searchDocument(element)
      finalData.push(data.data.data)
    })
    setdata(finalData)
  }
  console.log(data)
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
        {data.map((element) => (
          <SavedCard
            projectTitle={element.documentName}
            projectDescription={element.description}
          />
        ))}
      </Layout>
    </>
  )
}

export default Saved
