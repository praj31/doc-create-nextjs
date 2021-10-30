import { Dispatch, SetStateAction } from 'react'
import { IoAddOutline } from 'react-icons/io5'
import { Modal } from './Modal'

interface Props {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export const NewChapterModal: React.FunctionComponent<Props> = ({
  showModal,
  setShowModal,
}): JSX.Element => {
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
        <input maxLength={128} type="text" name="chapter-title" />
        <label htmlFor="chapter-description">Chapter Description</label>
        <textarea
          name="chapter-description"
          cols={30}
          rows={10}
          maxLength={255}
        ></textarea>
      </Modal.Body>
      <Modal.Action>
        <button className="btn-primary">Create</button>
      </Modal.Action>
    </Modal>
  )
}
