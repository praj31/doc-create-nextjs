import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { deleteCookie } from '../utils/cookie-helper'

const Logout: React.FunctionComponent = (): JSX.Element => {
  const router = useRouter()
  useEffect(() => {
    router.push('/login')
    deleteCookie('user')
    deleteCookie('token')
  })
  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <p>Logging Out...</p>
    </>
  )
}

export default Logout
