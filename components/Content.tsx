import Footer from 'components/Footer'

const Content = ({ children }) => (
  <main className="content flex flex-col flex-auto justify-between content-around overflow-y-auto max-w-6xl p-6 dark:text-gray-200">
    <div className="flex flex-col space-y-4">{children}</div>

    <div className="flex flex-col space-y-4">
      <Footer />
    </div>
  </main>
)
export default Content
