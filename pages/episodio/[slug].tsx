import type { Episode } from 'types'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Layout from 'components/layout'
import EpisodeContent from 'components/EpisodeContent'
import { getEpisode, getAllEpisodes } from 'lib/api'
import { GetStaticPropsContext } from 'next'

type EpisodeProps = {
  episode: Episode
  preview: boolean
}

export default function EpisodeCard({ episode, preview }: EpisodeProps) {
  const router = useRouter()
  const slug = router.query.slug as string

  if (!router.isFallback && !episode) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <div className="w-read p-6 m-auto">
        {router.isFallback ? (
          <h2>Carregando…</h2>
        ) : (
          <>
            <Head>
              <title>ZOFE - {episode.title}</title>
            </Head>

            <h2>
              <Link href={`/episodio/${slug}`}>
                <a>
                  {episode.title} / #{episode.episodeNumber}
                </a>
              </Link>
            </h2>

            {Boolean(episode.publishDate) && <div>De: {episode.publishDate}</div>}

            {Boolean(episode.postText) && (
              <ReactMarkdown className="post-text" linkTarget="_blank">
                {episode.postText.replace(/\<\!--.*--\>/g, '')}
              </ReactMarkdown>
            )}

            <EpisodeContent audioUrl={episode.audioUrl} episodeGuide={episode.episodeGuideCollection.items} />
          </>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }: GetStaticPropsContext<{ slug: string }>) {
  const { slug = '' } = params ?? {}
  const data = await getEpisode(slug, preview)

  return {
    props: {
      preview,
      episode: data.episode,
    },
  }
}

export async function getStaticPaths() {
  const allEpisodes = await getAllEpisodes()

  return {
    paths: allEpisodes.map(({ slug }: { slug: string}) => `/episodio/${slug}`) ?? [],
    fallback: false, // we want to be 404 when the episode is invalid
  }
}
