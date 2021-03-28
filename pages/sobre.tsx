import { getAllEpisodes } from 'lib/api'
import Layout from 'components/layout'
import Host from 'components/Host'
import { HOSTS } from 'lib/constants'
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
            Edição por{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.radiotrama.com/">
              Rádio Trama
            </a>
          </p>
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
