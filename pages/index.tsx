import Head from 'next/head'
import Link from 'next/link'

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <div>
        <h1>DocCreate</h1>
        <Link href="/login">
          <button className="btn-primary">Login</button>
        </Link>
      </div>
    </>
  )
}

export default Home
