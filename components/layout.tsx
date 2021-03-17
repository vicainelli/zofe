import type { ReactNode } from 'react'
import { useState } from 'react'
import Head from 'next/head'
import EpisodesBar from 'components/EpisodesBar'
import Sidebar from 'components/Sidebar'
import Content from 'components/Content'
import { SITE_NAME } from 'lib/constants'
import type { Episode } from 'types'

type LayoutProps = {
  preview: boolean
  children: ReactNode
  episodes: Episode[]
}

export default function Layout({ preview, children, episodes }: LayoutProps) {
  const [ showEpisodeBar, toggleEpisodeBar ] = useState(false)

  const switchTheme = () => {
    if (process.browser && localStorage.theme === 'dark') {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    } else {
      process.browser ? (localStorage.theme = 'dark') : null
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <>
      <Head>
        <title>{SITE_NAME} - Desenvolviment web</title>
      </Head>

      <div className="main flex flex-row h-screen dark:bg-gray-900">
        <Sidebar onChange={switchTheme} toggleEpisodeBar={() => { toggleEpisodeBar(!showEpisodeBar) }} />
        <EpisodesBar allEpisodes={episodes} isVisible={showEpisodeBar}/>
        <Content>
          {children}
        </Content>
      </div>
    </>
  )
}
