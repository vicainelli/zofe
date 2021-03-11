import type { EpisodeGuide } from 'types'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import parseTime from 'lib/parseTime'
import { SiDisqus as Disqus } from 'react-icons/si'
// import AudioPlayer from "components/AudioPlayer";

const Comments = dynamic(
  () => import('components/Comments'),
  { loading: () => <span>loading comments</span> }
)


type EpisodeContent = {
  audioUrl?: string
  episodeGuide: EpisodeGuide[]
}
const EpisodeContent = ({ audioUrl, episodeGuide }: EpisodeContent) => {
  const router = useRouter()
  const slug = router.query.slug as string

  const [ showComments, setShowComments ] = useState(false)

  return episodeGuide ? (
    <>
      {/* <AudioPlayer ref={this.ref} audioUrl={audioUrl} /> */}
      {/* <AudioPlayer audioUrl={audioUrl} /> */}
      <div className="w-read px-10 py-8 rounded-xl border-0 bg-gray-100 dark:bg-gray-800">
        <h3>Anotações do Episódio</h3>

        <ul>
          {episodeGuide.map((item, index) => (
            <li key={index}>
              <button
                title={`Pular áudio para tópico: ${item.title}`}
                onClick={() => console.log(parseTime(item.timestamp))}
              >
                [{item.timestamp}]
              </button>{' '}
              {Boolean(item.url) ? (
                <a target="_blank" href={item.url} rel="noopener noreferrer" title={`Visitar link: ${item.title}`}>
                  {item.title}
                </a>
              ) : (
                <>
                  <span>{item.title}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      {showComments ? <Comments slug={slug} /> : <button onClick={() => {setShowComments(!showComments)}}><Disqus aria-hidden /> Mostrar comentários </button>}
      <p>💩 Ao carregar os comentários via Disqus, os cookies que eles injetam serão inseridos</p>
    </>
  ) : null
}

export default EpisodeContent
