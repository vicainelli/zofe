import type { Episode } from 'types'
import type { ReactNode } from 'react'
import type { SEOProps } from 'components/SEO'
import { useState } from 'react'
import SEO from 'components/SEO'
import EpisodesBar from 'components/EpisodesBar'
import Sidebar from 'components/Sidebar'
import Content from 'components/Content'


type LayoutProps = {
  preview: boolean
  children: ReactNode
  episodes: Episode[]
  seoProps?: SEOProps
}

export default function Layout({ preview, children, episodes, seoProps }: LayoutProps) {
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
      <SEO {...seoProps} />
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
