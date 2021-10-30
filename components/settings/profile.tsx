import { IoCloudUploadOutline } from 'react-icons/io5'
import styles from '../../styles/Settings.module.css'

export const ProfileSetting: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.content}>
      <h3>Profile Picture</h3>
      <div className={styles.profile_picture}>
        <img
          src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"
          alt="Profile Picture of User"
        />
      </div>
      <div className={styles.upload_image}>
        <button>
          <IoCloudUploadOutline />
          Upload Image
        </button>
      </div>
      <h3>Bio</h3>
      <div className={styles.bio}>
        <label htmlFor="fullname">Fullname</label>
        <input name="fullname" type="text" />
        <label htmlFor="about">About</label>
        <textarea name="about" id="about"></textarea>
      </div>
    </div>
  )
}
