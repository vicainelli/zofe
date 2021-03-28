import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Layout from 'components/layout'
import EpisodeContent from 'components/EpisodeContent'
import { getEpisode, getAllEpisodes } from 'lib/api'
import formatDate from 'lib/formatDate'

export default function EpisodeCard({ episode, allEpisodes, preview }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const slug = router.query.slug as string

  return (
    <Layout preview={preview} episodes={allEpisodes} seoProps={{ title: episode.title }}>
      <div className="w-read p-6 m-auto">
        <h2>
          <Link href={`/episodio/${slug}`}>
            <a>
              {episode.title} / #{episode.episodeNumber}
            </a>
          </Link>
        </h2>

        {Boolean(episode.publishDate) && <span>De: <time dateTime={episode.publishDate}> {formatDate(episode.publishDate)}</time></span>}

        {Boolean(episode.postText) && (
          <ReactMarkdown className="post-text" linkTarget="_blank">
            {episode.postText.replace(/\<\!--.*--\>/g, '')}
          </ReactMarkdown>
        )}

        <EpisodeContent audioTitle={episode.title} audioUrl={episode.audioUrl} episodeGuide={episode.episodeGuideCollection.items} />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }: GetStaticPropsContext<{ slug: string }>) {
  const { slug = '' } = params ?? {}
  const data = await getEpisode(slug, preview)
  const allEpisodes = await getAllEpisodes()

  return {
    props: {
      preview,
      episode: data.episode,
      allEpisodes
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
