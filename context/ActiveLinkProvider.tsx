import { createContext, useState } from 'react'
import { ActiveLinkContextState } from '../types'

const defaultContextValue: ActiveLinkContextState = {
  activeLink: 'home',
  setLink: () => {},
}

export const ActiveLinkContext =
  createContext<ActiveLinkContextState>(defaultContextValue)

export const ActiveLinkProvider: React.FunctionComponent = ({ children }) => {
  const [activeLink, setActiveLink] = useState<string>(
    defaultContextValue.activeLink
  )

  const setLink = (newLink: string) => setActiveLink(newLink)

  return (
    <ActiveLinkContext.Provider
      value={{
        activeLink,
        setLink,
      }}
    >
      {children}
    </ActiveLinkContext.Provider>
  )
}
