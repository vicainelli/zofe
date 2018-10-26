import React from 'react'
import parseTime from '@helpers/parseTime'
import AudioPlayer from '@components/AudioPlayer'
import ZofeLink from '@components/ZofeLink'
import './styles.css'

// const EpisodeContent = props => {
class EpisodeContent extends React.Component {
  state = {
    player: ''
  }

  ref = player => {
    this.player = player
    this.setState({ player: player })
  }

  render() {
    return (!!this.props.content && (
      <>
        <AudioPlayer ref={this.ref} audioUrl={this.props.audioUrl} />

        <div className="episode-podcast">
          <div className="container">
            <h3>Anotações</h3>

              <div className="episode-guide">
                <ul className="list-reset">
                  {this.props.content.map(item => (
                    <li key={item.id} className="episodeItem">
                      <button
                        className="timestampButton"
                        title={`Pular áudio para tópico: ${item.title}`}
                        onClick={() => {
                        this.state.player.player.seekTo(parseTime(item.timestamp))
                      }}>
                        [{item.timestamp}]
                      </button>{' '}
                      {!!item.url ? (
                        <>
                          <ZofeLink
                            to={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Visitar link: ${item.title}`}
                          >
                            {item.title}
                          </ZofeLink>
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
            </div>
          </div>
        </>
      )
    )
  }
}

export default EpisodeContent
