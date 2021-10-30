import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/Login.module.css'

const Login: React.FunctionComponent = (): JSX.Element => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    router.push('/username/ongoing-projects')
  }

  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <div
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#cccccc',
              }}
            ></div>
          </div>
          <div className={styles.title}>
            <h1>Log in</h1>
          </div>
          <div className={styles.login_form}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login}>Let's Go!</button>
          </div>
          <div className={styles.signup}>
            <span>
              Don't have an account? <Link href="/signup">Sign Up</Link>
            </span>
          </div>
          <div className={styles.forgot_password}>
            <button>Forgot Password?</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
