import { Navbar } from './Navbar'
export const Layout: React.FunctionComponent = ({ children }): JSX.Element => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
