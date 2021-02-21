import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import EpisodeList from 'components/EpisodeList'
import { getAllEpisodes } from 'lib/api'

export default function EpisodesBar({ preview, allEpisodes }) {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    getAllEpisodes().then(data => setEpisodes(data))
  }, [])

  return (
    <div className="flex flex-col flex-shrink-0 overflow-y-auto w-96 p-6 bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
      <h2>Episódios</h2>

      <EpisodeList episodes={episodes} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allEpisodes = (await getAllEpisodes()) ?? []

  return {
    props: { preview, allEpisodes },
  }
}
