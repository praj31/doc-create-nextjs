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
import { stateFromHTML } from 'draft-js-import-html'

const TextEditor: React.FunctionComponent = (): JSX.Element => {
  const [editor, setEditor] = useState<boolean>(false)
  const router = useRouter()
  const [slug, setslug] = useState<any>('')
  const [changesActive, setChangesActive] = useState<boolean>(true)
  const [values, setvalues] = useState<any>({
    chapterName: '',
    projectName: '',
    username: '',
  })

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  )

  const chapterName = router.query['chapter-name']
  const projectName = router.query['project-name']
  const username = router.query['username']

  useEffect(() => {
    const pageSlug = router.query['chapter-name']
    if (pageSlug) {
      setslug(pageSlug)
      getData(pageSlug)
    }
  }, [chapterName])

  useEffect(() => {
    if (projectName && username && chapterName) {
      setvalues({
        chapterName: chapterName,
        projectName: projectName,
        username: username,
      })
    }
  }, [projectName, username, chapterName])

  const getData = async (slug: any) => {
    const getData = await getPageData(slug)
    console.log(getData.data.data.content)
    const content = getData.data.data.content
    setEditorState(EditorState.createWithContent(stateFromHTML(content)))
    // setEditorState(getData.data.data.content)
  }

  const handleSaveChanges = async () => {
    try {
      const html = stateToHTML(editorState.getCurrentContent())
      setChangesActive(true)

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
            <Link href={`/${username}/${projectName}`}>
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
            <Link
              href={`/${values.username}/${values.projectName}/${values.chapterName}/preview`}
            >
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
