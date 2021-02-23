import Head from 'next/head'
import { SITE_NAME } from 'lib/constants'
import Layout from 'components/layout'

export default function Index({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>

      <div className="p-6">
        <h1>Bem vindas</h1>
      </div>
    </Layout>
  )
}
