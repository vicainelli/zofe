import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Link from 'next/link'
import Layout from 'components/layout'
import Comments from 'components/Comments'
import EpisodeContent from 'components/EpisodeContent'
import { getEpisode, getAllEpisodes } from 'lib/api'

export default function Episode({ episode, preview }) {
  const router = useRouter()
  const slug = router.query.slug

  if (!router.isFallback && !episode) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <h2>Loading…</h2>
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
            <div
              dangerouslySetInnerHTML={{
                __html: episode.postText,
              }}
            ></div>
          )}

          <EpisodeContent audioUrl={episode.audioUrl} episodeGuide={episode.episodeGuideCollection.items} />

          <Comments slug={slug} />
        </>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getEpisode(params.slug, preview)

  return {
    props: {
      preview,
      episode: data?.episode ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allEpisodes = await getAllEpisodes()

  return {
    paths: allEpisodes?.map(({ slug }) => `/episodio/${slug}`) ?? [],
    fallback: true,
  }
}
