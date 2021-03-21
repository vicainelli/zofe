import Head from 'next/head'
import { getAllEpisodes } from 'lib/api'
import Layout from 'components/layout'
import Host from 'components/Host'
import { HOSTS } from 'lib/constants'
import { FaDiscord as Discord, FaTwitter as Twitter } from 'react-icons/fa'
import { InferGetStaticPropsType } from 'next'

export default function About ({ preview, allEpisodes }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
  <Layout preview={preview} episodes={allEpisodes} seoProps={{ title: 'Sobre' }}>
    <div className="main-container p-6">
      <h2>O que é o ZOFE?</h2>
      <div>
        <p>
          Um podcast com enfoque no desenvolvimento front-end da web. Sempre trazendo novidades, entrevistas, eventos e
          multiplicando conhecimento.
        </p>

        <div className="my-12">
          <h2>Apresentadores</h2>
          <ul className="grid lg:grid-cols-3 grid-row-3 gap-8">
            {HOSTS.map((host, idx) => (
              <Host key={host.url} invert={Boolean(idx % 2)} {...host}/>
            ))}
          </ul>
          <p className="my-24 lg:text-right text-center">
            Editado por{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/guigraz">
              Gui Grazziotin
            </a>
          </p>
        </div>

        <div>
          <h2>Conecte-se</h2>

          <ul className="flex md:justify-around justify-between p-10">
            <li className="grid place-items-center text-center">
              <a href="https://discord.com/invite/ZQ6Cr3S6wy" className="border-0" rel="noopener noreferrer" target="_blank">
                <Discord className="md:text-9xl text-6xl text-discord block mx-auto" aria-hidden/>
                <span className="block mt-4">Discord</span>
              </a>
            </li>
            <li className="flex items-center justify-center text-center">
              <a className="border-0" href="https://twitter.com/zofepod" rel="noopener noreferrer" target="_blank">
                <Twitter className="md:text-9xl text-6xl text-blue-500 block mx-auto" />
                <span className="block mt-4 text-center">@ZOFEpod</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 p-4 border-t-2 border-b-2 bg-gray-50 dark:border-gray-600 dark:bg-gray-800">
          <cite>
            Todas as marcas, nomes e conteúdos registrados citados no podcast, site e qualquer outro meio de publicação
            utilizado pelo ZOFE são de propriedade de seus respectivos criadores e/ou mantenedores.
          </cite>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const allEpisodes = await getAllEpisodes()

  return {
    props: { preview, allEpisodes },
  }
}