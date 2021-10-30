import { IoTrashOutline } from 'react-icons/io5'
import styles from '../../styles/Settings.module.css'

export const AccountSetting: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.content}>
      <h3>Username</h3>
      <div className={styles.username}>
        <input type="text" />
      </div>
      <h3>Change Password</h3>
      <div className={styles.change_password}>
        <label htmlFor="current_password">Enter Current Password</label>
        <input name="current_password" type="password" />
        <label htmlFor="new_password">Enter New Password</label>
        <input name="new_password" type="password" />
        <label htmlFor="confirm_new_password">Re-enter New Password</label>
        <input name="confirm_new_password" type="password" />
      </div>
      <h3>Delete Account</h3>
      <div className={styles.delete_account}>
        <button>
          <IoTrashOutline />
          Permanently Delete Account
        </button>
        <div>
          <span>This action cannot be reversed.</span>
        </div>
      </div>
    </div>
  )
}
