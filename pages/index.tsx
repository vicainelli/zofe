import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { SITE_NAME } from 'lib/constants'
import { getAllEpisodes } from 'lib/api'
import Layout from 'components/layout'

export default function Index({ preview = false, allEpisodes }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout preview={preview} episodes={allEpisodes}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>

      <div className="p-6 main-container">
        <h1>Bem vindas</h1>
      </div>
    </Layout>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const allEpisodes = await getAllEpisodes()

  return {
    props: { preview, allEpisodes },
  }
}