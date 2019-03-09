import React from 'react'
import Layout from '@components/Layout'

const ContactPage = () => (
  <Layout>
    <h2>Contato</h2>

    <form
      name="contact"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
    >
      <p>
        <label>
          Nome: <br />
          <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email: <br />
          <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Mensagem: <br />
          <textarea name="message" />
        </label>
      </p>

      <div data-netlify-recaptcha="true" />

      <p>
        <input type="hidden" name="form-name" value="contact" />
        <button type="submit">Enviar</button>
      </p>
    </form>
  </Layout>
)

export default ContactPage
