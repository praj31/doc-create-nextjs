import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IoBookmarkOutline } from 'react-icons/io5'
import { finalPagedata } from '../services/PageHandler'
import styles from '../styles/Document.module.css'

export const DocContent: React.FunctionComponent = (): JSX.Element => {
  const router = useRouter()
  const chapterName = router.query['chapter-name']
  const [data, setdata] = useState<any>()
  useEffect(() => {
    const getPageData = async (chapterSlug: any) => {
      const data = await finalPagedata(chapterSlug)
      console.log('Content ---- ', data.data.data)
      setdata(data.data.data)
    }
    if (chapterName) {
      getPageData(chapterName)
    }
  }, [chapterName])
  return (
    <>
      {data ? (
        <>
          <div className={styles.content}>
            <div className={styles.header}>
              <h1 className={styles.chapter_title}>{data.name}</h1>
              <div className={styles.meta}>
                <div className={styles.user_info}>Published By @username</div>
                <div className={styles.save}>
                  <IoBookmarkOutline />
                </div>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: data.content }}
              className={styles.chapter_content}
            ></div>
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  )
}
