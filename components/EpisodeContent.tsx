import type { EpisodeGuide } from 'types'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { FaPlayCircle as Play } from 'react-icons/fa'
import ShowComments, { DisqusLoader } from './ShowComments'
import EpisodeNotes from "components/EpisodeNotes"
import { useAudioContext } from 'lib/audioContext'
import { usePlayerContext } from 'lib/playerContext'

type EpisodeContent = {
  audioTitle: string
  audioUrl: string
  episodeGuide: EpisodeGuide[]
}

const Comments = dynamic(
  () => import('components/Comments'),
  { loading: () =>  <DisqusLoader /> }
)

const EpisodeContent = ({ audioTitle, audioUrl, episodeGuide }: EpisodeContent) => {
  const { setTrack } = useAudioContext()
  const { isOpen, toggleOpen } = usePlayerContext()
  const router = useRouter()
  const slug = router.query.slug as string
  const [ showComments, setShowComments ] = useState(false)

  return episodeGuide ? (
    <>
      <button
      className="pt-16 mx-auto text-center grid place-items-center gap-4"
      onClick={() => {
        if (!isOpen) toggleOpen(true)
        setTrack({
        title: audioTitle,
        url: audioUrl
      }) }}
      >
        <Play
          aria-hidden
          className="animate-pulse text-zofe text-7xl"
        />
        <span className="text-2xl text-red-800">
          Escutar este episódio
        </span>
      </button>
      <EpisodeNotes trackUrl={audioUrl} guide={episodeGuide} />
      {
        showComments ?
          <Comments slug={slug} /> :
          <ShowComments clickHandler={() => { setShowComments(!showComments) }} />
      }
    </>
  ) : null
}

export default EpisodeContent
