import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { DocContent } from '../../../../components/DocContent'
import { DocSidebar } from '../../../../components/DocSidebar'
import { Layout } from '../../../../components/layout'
import { getTitlesOfDocument } from '../../../../services/DocumentHandlers'

const Preview: React.FunctionComponent = (): JSX.Element => {
  const router = useRouter()
  const chapterName = router.query['chapter-name']
  const projectName = router.query['project-name']
  const username = router.query['username']
  const [currentChapter, setcurrentChapter] = useState(0)
  const [titles, settitles] = useState([])
  const [values, setvalues] = useState<any>({
    chapterName: '',
    projectName: '',
    username: '',
  })
  useEffect(() => {
    const getTitles = async (docId: any) => {
      const data = await getTitlesOfDocument(docId)
      console.log('Data ---- ', data.data.data)
      settitles(data.data.data)
    }

    if (projectName && username && chapterName) {
      setvalues({
        chapterName: chapterName,
        projectName: projectName,
        username: username,
      })
    }
    if (projectName) {
      const doc = projectName?.toString().split('--')[1]
      getTitles(doc)
    }
  }, [projectName, username, chapterName])
  const changeChapter = (index: number) => {
    console.log(index)
    const slug = titles[index]['slug']
    console.log('slug ', slug)
    router.push({
      pathname: `/[username]/[project-name]/[chapter-name]/preview`,
      query: {
        username: username,
        'project-name': projectName,
        'chapter-name': slug,
      },
    })
    // setcurrentChapter(index)
  }
  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <Layout>
        <div className="grid-14">
          <DocSidebar
            currentChapter={currentChapter}
            changeChapter={changeChapter}
            titles={titles}
          />
          <DocContent />
        </div>
      </Layout>
    </>
  )
}

export default Preview
