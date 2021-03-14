import Head from 'next/head'
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
      <h2>O que é o <abbr title="Zone of Front-enders">ZOFE</abbr>?</h2>
      <div>
        <p>
          <em>Zone of Front-enders</em> é um podcast com enfoque no desenvolvimento front-end da web. Sempre trazendo novidades, entrevistas, eventos e
          multiplicando conhecimento.
        </p>

        <div className="my-12">
          <h2>Apresentadores</h2>
          <ul className="grid grid-cols-3 gap-8">
            {HOSTS.map(host => (
              <Host key={host.url} {...host}/>
            ))}
          </ul>
          <p className="my-8">
            Podcast editado por{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/guigraz">
              Gui Grazziotin
            </a>
          </p>
        </div>

        <div>
          <h2>Conecte-se</h2>

          <ul className="flex justify-around p-10">
            <li className="grid place-items-center text-center">
              <a href="https://discord.com/invite/ZQ6Cr3S6wy" className="border-0" rel="noopener noreferrer" target="_blank">
                <Discord className="text-9xl text-discord" aria-hidden/>
                <span className="block mt-4">Discord Server</span>
              </a>
            </li>
            <li className="flex items-center justify-center text-center">
              <a className="border-0" href="https://twitter.com/zofepod" rel="noopener noreferrer" target="_blank">
                <div className="dark:text-black">
                  <Twitter className="text-9xl text-blue-500" />
                </div>
                <span className="block mt-4">@ZOFEpod</span>
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

export default AboutPage
