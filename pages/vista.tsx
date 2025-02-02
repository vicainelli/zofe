import type { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { getAllEpisodes } from 'lib/api'
import Layout from 'components/layout'

export default function Vista({ preview, allEpisodes }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout preview={preview} episodes={allEpisodes} seoProps={{ title: 'Vista' }}>
      <div className="p-6 main-container">
        <h1>Vista o ZOFE</h1>

        <p>
          Você pode comprar camisetas do ZOFE. A nossa margem de lucro é zero, vemos isso como uma maneira de você poder
          vestir uma peça de alta qualidade, demonstrando seu apoio o podcast. Seja em uma conferência, em um encontro
          ou por aí. Gostariamos de saber que estamos juntos 😉
        </p>

        <p>
          Vale lembrar tambem que cada opção tem uma grande variedade de combinações, entre tecidos e estilos. Corte,
          material, cor etc. Confira!
        </p>

        <div className="flex justify-between py-16">
          <div>
            <a
              href="https://cottonbureau.com/products/zofe-stealth"
              target="_blank"
              rel="noopener"
              className="border-0"
            >
              <Image
                src="/vista/stealth.png"
                alt="Camiseta escura com o logo do ZOFE em preto, quase invisível e super discreto"
                width={900}
                height={900}
              />
            </a>
            <p className="text-center">Stealth</p>
          </div>
          <div>
            <a
              href="https://cottonbureau.com/products/zofe-contrast"
              target="_blank"
              rel="noopener"
              className="border-0"
            >
              <Image
                src="/vista/contrast.png"
                alt="Camiseta escura com o logo do ZOFE em branco"
                width={900}
                height={900}
              />
            </a>
            <p className="text-center">Contrast</p>
          </div>
        </div>
        <p>
          As camisetas são fabricadas e vendidas através do Cotton Bureau. Nós não temos influência nem controle algum sobre a venda e o envio.
        </p>
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