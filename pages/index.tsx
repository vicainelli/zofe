import type { InferGetStaticPropsType } from 'next'
import { getAllEpisodes } from 'lib/api'
import Layout from 'components/layout'
import { GoMegaphone as Megaphone } from 'react-icons/go'

export default function Index({ preview = false, allEpisodes }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout preview={preview} episodes={allEpisodes}>
      <header className="main-container">
        <div className="mx-auto w-52 lg:w-full grid auto-rows-auto place-items-center gap-5 text-zofe text-4xl">
          <strong className="text-center lg:text-left">
            <Megaphone className="inline transform -rotate-12 animate-pulse" />
            Faaaaaaala Galera
          </strong>
        </div>
      </header>
      <article className="p-12 grid place-items-center">
        <p>o ZOFE voltou.</p>
        <p>No Discord</p>
        <p>No Twitter</p>
        <p>No teu fone!</p>
        <p></p>
      </article>
    </Layout>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const allEpisodes = await getAllEpisodes()

  return {
    props: { preview, allEpisodes },
  }
}