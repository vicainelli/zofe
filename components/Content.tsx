import type { ReactNode } from 'react'
import Footer from 'components/Footer'

type ContentProps = {
  children: ReactNode
}

const Content = ({ children }: ContentProps) => (
  <main className="content w-full overflow-y-auto dark:text-gray-200 lg:h-auto pt-24 lg:pt-6">
    {children}
    <Footer />
  </main>
)
export default Content
