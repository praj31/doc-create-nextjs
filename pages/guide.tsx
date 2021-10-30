import Head from 'next/head'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Layout } from '../components/layout'
import { ActiveLinkContext } from '../context'

const Guide: React.FunctionComponent = (): JSX.Element => {
  const { setLink } = useContext(ActiveLinkContext)

  useEffect(() => setLink('guide'))
  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <Layout>
        <h1>Guide</h1>
      </Layout>
    </>
  )
}

export default Guide
