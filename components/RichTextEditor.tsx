import { useEffect, useState } from 'react'
import { EditorState } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from '../styles/User.module.css'

interface Props {
  editorState: EditorState
  handleEditorStateChange: (editorstate: EditorState) => void
}

let Editor: any

export const RichTextEditor: React.FunctionComponent<Props> = ({
  editorState,
  handleEditorStateChange,
}) => {
  const [loadEditor, setLoadEditor] = useState<boolean>(false)
  useEffect(() => {
    Editor = require('react-draft-wysiwyg').Editor
    setLoadEditor(true)
  })

  return (
    <>
      {loadEditor ? (
        <Editor
          toolbar={{
            options: [
              'inline',
              'blockType',
              'list',
              'textAlign',
              'link',
              'remove',
              'history',
            ],
            inline: {
              inDropdown: false,
              options: [
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'monospace',
              ],
            },
            blockType: {
              inDropdown: true,
              options: [
                'Normal',
                'H1',
                'H2',
                'H3',
                'H4',
                'H5',
                'H6',
                'Blockquote',
                'Code',
              ],
            },
            list: {
              options: ['unordered', 'ordered', 'indent', 'outdent'],
            },
            textAlign: {
              options: ['left', 'center', 'right', 'justify'],
            },
            link: {
              inDropdown: false,
              showOpenOptionOnHover: true,
              defaultTargetOption: '_blank',
              options: ['link', 'unlink'],
            },
            history: {
              inDropdown: false,
              options: ['undo', 'redo'],
            },
          }}
          editorState={editorState}
          onEditorStateChange={handleEditorStateChange}
          wrapperClassName="demo-wrapper"
          editorClassName={styles.editor}
          toolbarClassName="toolbar-class"
          placeholder="Text goes here..."
        />
      ) : null}
    </>
  )
}
