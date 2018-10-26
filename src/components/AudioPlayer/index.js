import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Duration from './Duration'
import './styles.css'

class App extends Component {
  state = {
    url: null,
    playing: true,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
    })
  }

  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  play = () => {
    this.setState({ playing: true })
  }

  pause = () => {
    this.setState({ playing: false })
  }

  stop = () => {
    this.setState({ url: null, playing: false })
  }

  toggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }

  onPlay = () => {
    this.setState({ playing: true })
  }

  onPause = () => {
    this.setState({ playing: false })
  }

  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  onEnded = () => {
    this.setState({ playing: this.state.loop })
  }

  onDuration = duration => {
    this.setState({ duration })
  }

  ref = player => {
    this.player = player
  }

  componentDidMount() {
    this.load(this.props.url)
    this.pause()
  }

  render() {
    const {
      url,
      playing,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
    } = this.state

    const playPauseChar = () => {
      return playing ? 'M0 0h6v24H0zM12 0h6v24h-6z' : 'M18 12L0 24V0'
    }

    return (
      <div className="app">
        <section className="section">
          <div className="player-wrapper">
            <ReactPlayer
              ref={this.ref}
              className="react-player"
              width="100%"
              height="100%"
              url={url}
              playing={playing}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onPlay={this.onPlay}
              onPause={this.onPause}
              onEnded={this.onEnded}
              onError={e => console.log('onError', e)}
              onProgress={this.onProgress}
              onDuration={this.onDuration}
            />
          </div>

          <div className='episode-player'>
            <div className='player-row'>
              <button className="play-pause-btn" onClick={this.playPause} disabled={loaded <= 0.01}>
                { loaded <= 0.01 ? (
                <div className="loading">
                  <div className="spinner"></div>
                </div>
                ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
                  <path fill="#566574" fillRule="evenodd" d={playPauseChar()} className="play-pause-icon" id="playPause"/>
                </svg>
                )}
              </button>

              <div className="controls">
                <span className="current-time">
                  <Duration seconds={duration * played} />
                </span>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step="any"
                  value={played}
                  onMouseDown={this.onSeekMouseDown}
                  onChange={this.onSeekChange}
                  onMouseUp={this.onSeekMouseUp}
                  className="slider"
                />
                <span className="total-time"><Duration seconds={duration} /></span>
              </div>

              <div className="volume">
                <button className="volume-btn" onClick={this.toggleMuted}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill={muted ? '#c42929' : '#566574'} fillRule="evenodd" d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z" id="speaker"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
