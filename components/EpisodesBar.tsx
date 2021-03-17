import { useState, useEffect } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import EpisodeList from 'components/EpisodeList'
import { getAllEpisodes } from 'lib/api'

export default function EpisodesBar({ preview, allEpisodes }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    getAllEpisodes().then(data => setEpisodes(data))
  }, [])

  return (
    <nav className="hidden lg:flex flex-col flex-shrink-0 overflow-y-auto w-96 p-6 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 zofe-scrollbar">
      <h2>Episódios</h2>

      <EpisodeList episodes={episodes} />
    </nav>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const allEpisodes = (await getAllEpisodes()) ?? []

  return {
    props: { preview, allEpisodes },
  }
}
