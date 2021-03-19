import EpisodeList from 'components/EpisodeList'
import type { Episode } from 'types'

type EpisodeBarProps = {
  allEpisodes: Episode[]
  isVisible?: boolean
}

export default function EpisodesBar({ allEpisodes = [], isVisible = false }: EpisodeBarProps) {
  return (
    <nav className={`${isVisible ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static absolute z-10 h-screen ease-in-out transform transition-all duration-300 lg:flex flex-col flex-shrink-0 overflow-y-auto w-96 p-6 lg:pb-0 pb-24 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 zofe-scrollbar`}>
      <h2>Episódios</h2>

      <EpisodeList episodes={allEpisodes} />
    </nav>
  )
}