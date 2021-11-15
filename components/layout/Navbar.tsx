import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ActiveLinkContext } from '../../context'
import {
  IoBookmark,
  IoBookmarkOutline,
  IoCompass,
  IoCompassOutline,
  IoHome,
  IoHomeOutline,
  IoLogOutOutline,
  IoPersonCircleOutline,
  IoSettingsOutline,
} from 'react-icons/io5'
import { useContext } from 'react'
import styles from '../../styles/Navbar.module.css'
import { getJSONCookie } from '../../utils/cookie-helper'

export const Navbar: React.FunctionComponent = (): JSX.Element => {
  const { activeLink } = useContext(ActiveLinkContext)
  const [username, setusername] = useState('')
  useEffect(() => {
    const user = getJSONCookie('user')
    setusername(user.username)
  }, [])
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__brand}>DocCreate</div>
        <div className={styles.nav__links}>
          <ul>
            <li>
              <Link
                href={{
                  pathname: '/[username]/ongoing-projects',
                  query: { username: username },
                }}
              >
                {activeLink === 'home' ? <IoHome /> : <IoHomeOutline />}
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/[username]/saved',
                  query: { username: username },
                }}
              >
                {activeLink === 'saved' ? (
                  <IoBookmark />
                ) : (
                  <IoBookmarkOutline />
                )}
              </Link>
            </li>
            <li>
              <Link href="/explore/docs">
                {activeLink === 'explore' ? (
                  <IoCompass />
                ) : (
                  <IoCompassOutline />
                )}
              </Link>
            </li>
            <li className={styles.profile}>
              <IoPersonCircleOutline />
              <div className={styles.profile_dropdown}>
                <Link
                  href={{
                    pathname: '/[username]/settings',
                    query: { username: username },
                  }}
                >
                  <div>
                    <IoSettingsOutline />
                    Settings
                  </div>
                </Link>
                <Link href="/logout">
                  <div>
                    <IoLogOutOutline />
                    Logout
                  </div>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
