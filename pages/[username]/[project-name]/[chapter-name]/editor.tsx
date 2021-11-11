import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Layout } from '../../../../components/layout'
import { IoChevronBackOutline } from 'react-icons/io5'
import { stateToHTML } from 'draft-js-export-html'
import { EditorState } from 'draft-js'
import styles from '../../../../styles/User.module.css'
import { RichTextEditor } from '../../../../components/RichTextEditor'
import { useRouter } from 'next/router'
import { getPageData, updatePageData } from '../../../../services/PageHandler'

const TextEditor: React.FunctionComponent = (): JSX.Element => {
  const [editor, setEditor] = useState<boolean>(false)
  const router = useRouter()
  const [slug, setslug] = useState<any>('')
  const [changesActive, setChangesActive] = useState<boolean>(true)

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  )

  const chapterName = router.query['chapter-name']

  useEffect(() => {
    const pageSlug = router.query['chapter-name']
    if (pageSlug) {
      setslug(pageSlug)
      getData(pageSlug)
    }
  }, [chapterName])

  const getData = async (slug: any) => {
    const getData = await getPageData(slug)
    console.log(getData.data.data.content)
    // setEditorState(getData.data.data.content)
  }

  const handleSaveChanges = async () => {
    try {
      const html = stateToHTML(editorState.getCurrentContent())
      setChangesActive(true)
      console.log('Slug --- ', slug)
      const data = await updatePageData(slug, html)
      console.log('Data ', data)
    } catch (error) {}
  }

  const handleEditorStateChange = (editorstate: EditorState) => {
    setEditorState(editorstate)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setEditor(true)
    }
  })

  useEffect(() => {
    setChangesActive(false)
  }, [editorState])

  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <Layout>
        <div className="grid-121">
          <div className={styles.navigate_back}>
            <Link href="/username/project-name">
              <div>
                <IoChevronBackOutline /> Back to Chapters
              </div>
            </Link>
          </div>
          <div className={styles.content}>
            <div className={styles.editor}>
              {editor ? (
                <RichTextEditor
                  editorState={editorState}
                  handleEditorStateChange={handleEditorStateChange}
                />
              ) : null}
            </div>
          </div>
          <div className={styles.actions}>
            <button
              className="btn-primary"
              disabled={changesActive}
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
            <Link href="/username/project-name/chapter-name/preview">
              <a target="_blank">
                <button className="btn-primary">Preview</button>
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default TextEditor
