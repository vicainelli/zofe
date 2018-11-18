import React from 'react'
import Layout from '@components/Layout'
import ZofeLink from '@components/ZofeLink'
import twitter from '@images/social-icons/twitter.svg'
import facebook from '@images/social-icons/facebook.svg'
import './sobre.css'

const AboutPage = () => (
  <Layout>
    <h2>Sobre</h2>

    <div>
      <section>
        <p>Podcast com enfoque no desenvolvimento front-end da web. Sempre trazendo novidades, entrevistas, eventos e multiplicando
          conhecimento. Este podcast é apresentado por <ZofeLink to="https://twitter.com/danielfilho">Daniel Filho</ZofeLink> e <ZofeLink to="https://twitter.com/silveira_bells">Isa
            Silveira
          </ZofeLink>.
        </p>
        <p>
          <ul>
            <li>
              <ZofeLink to="https://twitter.com/danielfilho" target="_blank" className="no-underline">
                <img src="https://www.gravatar.com/avatar/3f2ebf61315d43cae59e727dab091620?s=300" alt="Foto de perfíl de Daniel Filho" />
                <p>Daniel Filho</p>
              </ZofeLink>
            </li>
            <li>
              <ZofeLink to="https://twitter.com/silveira_bells" target="_blank" className="no-underline">
                <img src="https://www.gravatar.com/avatar/91b0fc08849c4128f1eed542c057fd27?s=300" alt="Foto de perfíl de Isa Silveira" />
                <p>Isabella Silveira</p>
              </ZofeLink>
            </li>
          </ul>
        </p>
      </section>

      <section>
        <p className="sobre-subheader">EDIÇÃO</p>
        <p className="sobre-section-text">
          Podcast editado por <ZofeLink to="https://twitter.com/guigraz">Gui Grazziotin</ZofeLink>
        </p>
      </section>

      <section>
        <p className="sobre-subheader">IDENTIDADE VISUAL</p>
        <p className="sobre-section-text">Nosso logotipo e todas as suas variações foram feitas por <a title="Diosanto" to="https://www.facebook.com/denisfonseca.diosanto" target="_blank">
          Denis &#8220;Diosanto&#8221; Fonseca</a>.
        </p>
      </section>

      <section>
        <p className="sobre-subheader">REDES SOCIAIS</p>
        <ul className="social-networks">
          <li className="sobre-social-item">
            <ZofeLink to="https://twitter.com/zofepod" className="no-underline social-icon">
              <img src={twitter} alt="ZOFE no Twitter" /> Twitter
            </ZofeLink>
          </li>
          <li className="sobre-social-item">
            <ZofeLink to="httsp://facebook.com/zofepod" className="no-underline social-icon">
            <img src={facebook} alt="ZOFE no Facebook" /> Facebook
            </ZofeLink>
          </li>
        </ul>
      </section>

      <section>
        <p className="sobre-subheader">GITHUB</p>
        <p className="sobre-section-text">O código do nosso site pode ser encontrado no github: <ZofeLink to="https://github.com/zofepod">https://github.com/zofepod</ZofeLink>.</p>
      </section>
      <hr />
      <section className="sobre-copyright">
        <h6>Todas as marcas, nomes e conteúdos registrados citados no podcast, site e qualquer outro meio de publicação utilizado
          pelo Zone Of Front-Enders são de propriedade de seus respectivos criadores e/ou mantenedores.</h6>
      </section>
    </div>
  </Layout>
)

export default AboutPage


