import React from 'react'
import Layout from '@components/Layout'
import ZofeLink from '@components/ZofeLink'
import contrast from '@images/vista/contrast.png'
import stealth from '@images/vista/stealth.png'
import './vista.css'

const ContactPage = () => (
  <Layout>
    <h2>Vista</h2>
    <p>
      Você pode comprar camisetas do ZOFE. A nossa margem de lucro é zero, vemos isso como uma
      maneira de você poder vestir uma camiseta de alta qualidade, com um logotipo legal de um
      podcast. Seja em uma conferência, em um encontro ou na rua. Gostariamos de saber que estamos
      juntos 😉
    </p>

    <p>
      Vale lembrar tambem que cada opção tem uma grande variedade de combinações, entre tecidos e
      estilos. Corte, material, cor, regata, blusa. Confira!
    </p>

    <div className="apparel-wrapper">
      <div className="apparel">
        <div>
          <h3>Stealth</h3>
          <ZofeLink to="https://cottonbureau.com/products/zofe-stealth" target="_blank">
            <img
              src={stealth}
              alt="Camiseta escura com o logo do ZOFE em preto, quase invisível e super discreto"
            />
          </ZofeLink>
        </div>
      </div>
      <div className="apparel">
        <div>
          <h3>Contrast</h3>
          <ZofeLink to="https://cottonbureau.com/products/zofe-contrast" target="_blank">
            <img
              src={contrast}
              alt="Camiseta escura com o logo do ZOFE em preto, quase invisível e super discreto"
            />
          </ZofeLink>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
