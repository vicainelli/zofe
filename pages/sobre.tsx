import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/layout'
import Host from 'components/Host'
import { SITE_NAME } from 'lib/constants'

const HOSTS = [
  { name: 'Atila Fassina', url: 'https://twitter.com/atilafassina', avatar: 'https://www.gravatar.com/avatar/5dec492a029e20e74054d5c4c3e8d16c?s=300' },
  { name: 'Daniel Filho', url: 'https://twitter.com/danielfilho', avatar: 'https://www.gravatar.com/avatar/3f2ebf61315d43cae59e727dab091620?s=300' },
  { name: 'Isa Silveira', url: 'https://twitter.com/silveira_bells', avatar: 'https://www.gravatar.com/avatar/91b0fc08849c4128f1eed542c057fd27?s=300'  }
]

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
                  <div className="bg-zofe rounded-full p-5 dark:text-black">
                    <svg
                      className="w-32 h-32 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>
                  <span className="block mt-4">Discord</span>
                </a>
              </Link>
            </li>
            <li className="flex items-center justify-center text-center">
              <Link href="https://twitter.com/zofepod">
                <a className="border-0">
                  <div className="bg-zofe rounded-full p-5 dark:text-black">
                    <svg
                      className="w-32 h-32 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="block mt-4">Twitter</span>
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
