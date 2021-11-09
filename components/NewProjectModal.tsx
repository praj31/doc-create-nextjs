import { Dispatch, SetStateAction, useState } from 'react'
import { IoAddOutline } from 'react-icons/io5'
import { createDocument } from '../services/DocumentHandlers'
import { Modal } from './Modal'

interface Props {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export const NewProjectModal: React.FunctionComponent<Props> = ({
  showModal,
  setShowModal,
}): JSX.Element => {
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')

  const onSubmit = async () => {
    try {
      const data = await createDocument(title, description)
      console.log('Data --- ', data.data)
      window.location.reload()
    } catch (error) {
      console.log('Error --- ', error)
    }
  }

  return (
    <Modal show={showModal} setShow={setShowModal}>
      <Modal.Header>
        <Modal.HeaderIcon>
          <IoAddOutline />
        </Modal.HeaderIcon>
        <Modal.HeaderTitle>New Project</Modal.HeaderTitle>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="project-title">Project Title</label>
        <input
          onChange={(e) => settitle(e.target.value)}
          maxLength={128}
          type="text"
          name="project-title"
        />
        <label htmlFor="project-description">Project Description</label>
        <textarea
          name="project-description"
          cols={30}
          onChange={(e) => setdescription(e.target.value)}
          rows={10}
          maxLength={255}
        ></textarea>
      </Modal.Body>
      <Modal.Action>
        <button onClick={onSubmit} className="btn-primary">
          Create
        </button>
      </Modal.Action>
    </Modal>
  )
}
