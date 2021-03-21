
import type { ControlsProps } from 'components/Controls'
import { useState } from 'react'
import Controls from 'components/Controls'
import LinksMenu from 'components/LinksMenu'

const Sidebar = ({ changeTheme, toggleEpisodeBar }: Omit<ControlsProps, 'toggleLinksMenu' | 'isLinksMenuExpanded'>) => {
  const [isLinksMenuExpanded, toggleLinksMenu] = useState(false)

  return (
    <header
      className="lg:grid lg:liquid-gap lg:w-24 lg:pt-6 py-3 lg:p-3 lg:h-screen w-full lg:static fixed bottom-0 bg-gray-200 dark:bg-gray-700 z-20"
    >
      <Controls changeTheme={changeTheme} isLinksMenuExpanded={isLinksMenuExpanded} toggleLinksMenu={toggleLinksMenu} toggleEpisodeBar={toggleEpisodeBar} />
      <LinksMenu isExpanded={isLinksMenuExpanded} />
    </header>
  )
}

export default Sidebar
