import { Dispatch, SetStateAction, useState } from 'react'
import { IoAddOutline } from 'react-icons/io5'
import { createPageHandler } from '../services/PageHandler'
import { Modal } from './Modal'

interface Props {
  showModal: boolean
  orderNo: number
  documentId: string | undefined
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export const NewChapterModal: React.FunctionComponent<Props> = ({
  showModal,
  setShowModal,
  documentId,
  orderNo,
}): JSX.Element => {
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  console.log(orderNo)
  const createPage = async () => {
    try {
      const dataToPass = {
        documentId: documentId,
        name: title,
        description: description,
        content: '',
        orderNo: orderNo,
      }
      const data: any = await createPageHandler(dataToPass)
      console.log(data.data)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Modal show={showModal} setShow={setShowModal}>
      <Modal.Header>
        <Modal.HeaderIcon>
          <IoAddOutline />
        </Modal.HeaderIcon>
        <Modal.HeaderTitle>New Chapter</Modal.HeaderTitle>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="chapter-title">Chapter Title</label>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          maxLength={128}
          type="text"
          name="chapter-title"
        />
        <label htmlFor="chapter-description">Chapter Description</label>
        <textarea
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          name="chapter-description"
          cols={30}
          rows={10}
          maxLength={255}
        ></textarea>
      </Modal.Body>
      <Modal.Action>
        <button onClick={createPage} className="btn-primary">
          Create
        </button>
      </Modal.Action>
    </Modal>
  )
}
