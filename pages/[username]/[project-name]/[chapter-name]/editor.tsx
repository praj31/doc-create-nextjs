import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Layout } from '../../../../components/layout'
import { IoChevronBackOutline } from 'react-icons/io5'
import { stateToHTML } from 'draft-js-export-html'
import { EditorState } from 'draft-js'
import styles from '../../../../styles/User.module.css'
import { RichTextEditor } from '../../../../components/RichTextEditor'

const TextEditor: React.FunctionComponent = (): JSX.Element => {
  const [editor, setEditor] = useState<boolean>(false)

  const [changesActive, setChangesActive] = useState<boolean>(true)

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  )

  const handleSaveChanges = () => {
    const html = stateToHTML(editorState.getCurrentContent())
    setChangesActive(true)
    console.log(html)
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
