import React from 'react'
import Layout from '@components/Layout'

const ContactPage = () => (
  <Layout>
    <h2>Contato</h2>

    <form name="contact" method="post" netlify>
      <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome"  />
      </div>

      <div>
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" />
      </div>

      <div>
        <label for="message">Mensagem:</label>
        <textarea id="message" name="message" rows="3"></textarea>
      </div>

      <div data-netlify-recaptcha></div>

      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  </Layout>
)

export default ContactPage
