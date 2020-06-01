import React from 'react'
import Layout from '@components/Layout'
import ZofeLink from '@components/ZofeLink'
import blusa from '@images/blusa.png'
import camisetaM from '@images/camiseta-m.png'
import camisetaH from '@images/camiseta-h.png'
import './vista.css'

const VistaPage = () => (
  <Layout>
    <h2>Vista</h2>

    <div>
      <section>
        <p>Você pode colaborar com o podcast comprando nossa camiseta ou blusa.</p>
        <p>
          Temos uma margem de lucro de aproximadamente 10 <span title="dólares">USD</span> por
          produto vendido, que é convertido para pagar a edição de nossos episódios.
        </p>
      </section>

      <section className="merch">
        <div>
          <ZofeLink
            className="no-underline"
            to="https://cottonbureau.com/products/zone-of-front-enders#/980532/tee-women-junior-fit-tee-vintage-black-tri-blend-s"
          >
            <img
              src={camisetaM}
              alt="Camiseta do ZOFE com corte feminino, cinza malhada com logo  amarelo e branco"
            />
          </ZofeLink>
        </div>

        <div>
          <ZofeLink
            className="no-underline"
            to="https://cottonbureau.com/products/zone-of-front-enders#/980524/tee-men-standard-tee-vintage-black-tri-blend-s"
          >
            <img
              src={camisetaH}
              alt="Camiseta do ZOFE com corte masculino, cinza malhada com o logo em amarelo e branco"
            />
          </ZofeLink>
        </div>

        <div>
          <ZofeLink
            className="no-underline"
            to="https://cottonbureau.com/products/zone-of-front-enders#/980537/sweatshirt-unisex-pullover-hoodie-black-poly-cotton-xs"
          >
            <img
              src={blusa}
              alt="Blusa preta com capuz e logo do ZOFE em amarelo e branco, com bolsos frontais (sem ziper)"
            />
          </ZofeLink>
        </div>
      </section>

      <section>
        <p>
          As peças são vendidas pelo site{' '}
          <ZofeLink to="https://cottonbureau.com/">Cotton Bureau</ZofeLink>.
        </p>
        <p>
          A operação fica toda nos Estados Unidos da America, são enviados por eles para todo o
          mundo, cobrado em dólares via cartão de crédito. Toda a logística e distribuição fica por
          encargo dos mesmos. Até a criação desta página, os pedidos levam de uma a duas semanas
          para serem produzidos e enviados. O tempo entre o envio e a chegada pode variar com sua
          região e logística da mesma.
        </p>
      </section>
    </div>
  </Layout>
)

export default VistaPage
