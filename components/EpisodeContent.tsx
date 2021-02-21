import Link from 'next/link'
import parseTime from 'lib/parseTime'
// import AudioPlayer from "components/AudioPlayer";

const EpisodeContent = props => {
  const { episodeGuide } = props

  return episodeGuide ? (
    <>
      {/* <AudioPlayer ref={this.ref} audioUrl={this.props.audioUrl} /> */}

      <div className="w-full px-10 py-8 rounded-xl border-0 bg-gray-100 dark:bg-gray-800">
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
              {!!item.url ? (
                <>
                  <Link href={item.url}>
                    <a target="_blank" rel="noopener noreferrer" title={`Visitar link: ${item.title}`}>
                      {item.title}
                    </a>
                  </Link>
                </>
              ) : (
                <>
                  <span>{item.title}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  ) : null
}

export default EpisodeContent
