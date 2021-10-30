import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import { Layout } from '../../components/layout'
import { AccountSetting } from '../../components/settings/account'
import { ProfileSetting } from '../../components/settings/profile'
import { ActiveLinkContext } from '../../context'
import styles from '../../styles/User.module.css'

const Settings: React.FunctionComponent = (): JSX.Element => {
  const { setLink } = useContext(ActiveLinkContext)
  const [activeCategory, setActiveCategory] = useState<string>('profile')
  useEffect(() => setLink('profile'))
  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <Layout>
        <div className="grid-121">
          <div className={styles.navigation}>
            <div
              className={activeCategory === 'profile' ? styles.activeTab : ''}
              onClick={() => setActiveCategory('profile')}
            >
              Profile
            </div>
            <div
              className={activeCategory === 'account' ? styles.activeTab : ''}
              onClick={() => setActiveCategory('account')}
            >
              Account
            </div>
          </div>
          <div className={styles.content}>
            {activeCategory === 'profile' && <ProfileSetting />}
            {activeCategory === 'account' && <AccountSetting />}
          </div>
          <div>
            <div className={styles.update_btn}>Update Changes</div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Settings
