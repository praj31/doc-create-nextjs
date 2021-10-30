interface Props {
  show: boolean
  setShow: (state: boolean) => void
}

type HeaderIconComponent = React.FunctionComponent
type HeaderTitleComponent = React.FunctionComponent
type HeaderComponent = React.FunctionComponent
type BodyComponent = React.FunctionComponent
type ActionComponent = React.FunctionComponent
type ModalComponent = React.FunctionComponent<Props> & {
  Header: HeaderComponent
} & {
  Body: BodyComponent
} & { Action: ActionComponent } & { HeaderIcon: HeaderIconComponent } & {
  HeaderTitle: HeaderTitleComponent
}

const Header: HeaderComponent = ({ children }): JSX.Element => {
  return <div className="modal__header">{children}</div>
}

const HeaderIcon: HeaderIconComponent = ({ children }): JSX.Element => {
  return <div className="modal__header__icon">{children}</div>
}

const HeaderTitle: HeaderTitleComponent = ({ children }): JSX.Element => {
  return (
    <div className="modal__header__title">
      <h3>{children}</h3>
    </div>
  )
}

const Body: BodyComponent = ({ children }): JSX.Element => {
  return <div className="modal__body">{children}</div>
}

const Action: ActionComponent = ({ children }): JSX.Element => {
  return <div className="modal__action">{children}</div>
}

export const Modal: ModalComponent = ({
  show,
  setShow,
  children,
}): JSX.Element => {
  return (
    <div
      className="backdrop"
      style={{ display: `${show ? 'grid' : 'none'}` }}
      onClick={() => setShow(false)}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

Modal.Header = Header
Modal.HeaderIcon = HeaderIcon
Modal.HeaderTitle = HeaderTitle
Modal.Body = Body
Modal.Action = Action
