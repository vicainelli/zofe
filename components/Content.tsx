import Footer from 'components/Footer'
import type { ReactNode } from 'react'

type ContentProps = {
  children: ReactNode
}

const Content = ({ children }: ContentProps) => (
  <main className="content flex flex-col flex-auto justify-between content-around overflow-y-aut dark:text-gray-200">
    <div className="flex flex-col space-y-4">{children}</div>
    <div className="flex flex-col space-y-4">
      <Footer />
    </div>
  </main>
)
export default Content
