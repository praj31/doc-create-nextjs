import Head from 'next/head'
import { DocContent } from '../../../../components/DocContent'
import { DocSidebar } from '../../../../components/DocSidebar'
import { Layout } from '../../../../components/layout'

const Preview: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>DocCreate</title>
      </Head>
      <Layout>
        <div className="grid-14">
          <DocSidebar />
          <DocContent />
        </div>
      </Layout>
    </>
  )
}

export default Preview
