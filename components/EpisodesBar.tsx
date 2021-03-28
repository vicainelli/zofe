import EpisodeList from 'components/EpisodeList'
import type { Episode } from 'types'

type EpisodeBarProps = {
  allEpisodes: Episode[]
  isVisible?: boolean
}

export default function EpisodesBar({ allEpisodes = [], isVisible = false }: EpisodeBarProps) {
  return (
    <nav className={`${isVisible ? 'translate-x-0' : '-translate-x-full'}
      lg:flex
      lg:translate-x-0
      lg:static
      lg:pb-5
      lg:px-4
      absolute
      z-10
      h-screen
      ease-in-out
      transform
      transition-all
      duration-300
      flex-col
      flex-shrink-0
      overflow-y-auto
      w-96
      p-5
      pb-24
      bg-gray-100
      dark:bg-gray-800
      dark:text-gray-200 zofe-scrollbar`
    }>
      <h2>Episódios</h2>

      <EpisodeList episodes={allEpisodes} />
    </nav>
  )
}