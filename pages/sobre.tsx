import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/layout'
import Host from 'components/Host'
import { SITE_NAME, HOSTS } from 'lib/constants'
import { FaDiscord as Discord, FaTwitter as Twitter } from 'react-icons/fa'

const AboutPage = ({ preview = false }) => (
  <Layout preview={preview}>
    <Head>
      <title>Sobre - {SITE_NAME}</title>
    </Head>

    <div className="main-container p-6">
      <h2>O que é o ZOFE?</h2>
      <div>
        <p>
          Podcast com enfoque no desenvolvimento front-end da web. Sempre trazendo novidades, entrevistas, eventos e
          multiplicando conhecimento.
        </p>

        <div className="my-12">
          <h2>Time</h2>
          <ul className="flex justify-between text-center">
            {HOSTS.map(Host)}
          </ul>
          <p className="my-8">
            Podcast editado por{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/guigraz">
              Gui Grazziotin
            </a>
          </p>
        </div>

        <div>
          <h2>Fala conosco</h2>

          <ul className="flex justify-around p-10">
            <li className="flex items-center justify-center text-center">
              <Link href="https://discord.com/invite/ZQ6Cr3S6wy">
                <a className="border-0">
                  <div className="p-5">
                    <Discord className="text-9xl text-discord" aria-hidden/>
                  </div>
                  <span className="block mt-4">Discord Server</span>
                </a>
              </Link>
            </li>
            <li className="flex items-center justify-center text-center">
              <Link href="https://twitter.com/zofepod">
                <a className="border-0">
                  <div className="dark:text-black">
                    <Twitter className="text-9xl text-blue-500" />
                  </div>
                  <span className="block mt-4">@ZOFEpod</span>
                </a>
              </Link>
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

export default AboutPage
