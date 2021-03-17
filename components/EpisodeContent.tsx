import type { EpisodeGuide } from 'types'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import ShowComments, { DisqusLoader } from './ShowComments'
import AudioPlayer from "components/AudioPlayer"

const Comments = dynamic(
  () => import('components/Comments'),
  { loading: () =>  <DisqusLoader /> }
)


type EpisodeContent = {
  audioUrl: string
  episodeGuide: EpisodeGuide[]
}
const EpisodeContent = ({ audioUrl, episodeGuide }: EpisodeContent) => {
  const router = useRouter()
  const slug = router.query.slug as string
  const [ showComments, setShowComments ] = useState(false)

  return episodeGuide ? (
    <>
      <AudioPlayer url={audioUrl} guide={episodeGuide} />
      {showComments ? <Comments slug={slug} /> : <ShowComments clickHandler={() => { setShowComments(!showComments) }} />}
    </>
  ) : null
}

export default EpisodeContent
