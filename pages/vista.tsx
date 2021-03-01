import Head from 'next/head'
import Image from 'next/image'
import Layout from 'components/layout'
import { SITE_NAME } from 'lib/constants'

export default function Vista({ preview = false }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Vista - {SITE_NAME}</title>
      </Head>

      <div className="p-6">
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
      </div>
    </Layout>
  )
}
