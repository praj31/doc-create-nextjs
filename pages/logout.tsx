import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Logout: React.FunctionComponent = (): JSX.Element => {
  const router = useRouter()
  useEffect(() => {
    router.push('/login')
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
