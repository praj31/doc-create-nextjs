import { Dispatch, SetStateAction } from 'react'
import { IoAddOutline } from 'react-icons/io5'
import { Modal } from './Modal'

interface Props {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export const NewProjectModal: React.FunctionComponent<Props> = ({
  showModal,
  setShowModal,
}): JSX.Element => {
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
        <input maxLength={128} type="text" name="project-title" />
        <label htmlFor="project-description">Project Description</label>
        <textarea
          name="project-description"
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
