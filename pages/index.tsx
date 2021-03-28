import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Layout from 'components/layout'
import EpisodeContent from 'components/EpisodeContent'
import { getEpisode, getAllEpisodes } from 'lib/api'
import formatDate from 'lib/formatDate'
import { SITE_NAME } from 'lib/constants'

export default function EpisodeCard({ latestEpisode, allEpisodes, preview }: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    slug,
    title,
    episodeNumber,
    audioUrl,
    postText,
    publishDate,
    episodeGuideCollection,
  } = latestEpisode

  return (
    <Layout preview={preview} episodes={allEpisodes}>
      <div className="w-read p-6 m-auto">
        <span>episódio mais recente:</span>
        <h2>
          <Link href={`/episodio/${slug}`}>
            <a>
              {title} / #{episodeNumber}
            </a>
          </Link>
        </h2>

        {Boolean(publishDate) && <span>De: <time dateTime={publishDate}> {formatDate(publishDate)}</time></span>}

        {Boolean(postText) && (
          <ReactMarkdown className="post-text" linkTarget="_blank">
            {postText.replace(/\<\!--.*--\>/g, '')}
          </ReactMarkdown>
        )}

        <EpisodeContent audioTitle={title} audioUrl={audioUrl} episodeGuide={episodeGuideCollection.items} />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext<{ slug: string }>) {
  const allEpisodes = await getAllEpisodes()
  const [latestEpisode] = allEpisodes
  const data = await getEpisode(latestEpisode?.slug, preview)

  return {
    props: {
      preview,
      allEpisodes,
      latestEpisode: data.episode,
    },
  }
}
