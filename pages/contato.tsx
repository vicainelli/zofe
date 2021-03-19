import type { InferGetStaticPropsType } from 'next'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import Head from 'next/head'
import { SITE_NAME } from 'lib/constants'
import { getAllEpisodes } from 'lib/api'
import Layout from 'components/layout'

const contactZOFE = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const { name, email, message } = event.target as typeof event.target & {
      name: { value: string }
      email: { value: string }
      message: { value: string }
  }

  await fetch('/api/contact', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  })
}

const ContactPage = ({ preview = false, allEpisodes }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [message, setMessage] = useState('')
  const updateMessage = (event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)

  return (
    <Layout preview={preview} episodes={allEpisodes}>
      <Head>
        <title>Contato - {SITE_NAME}</title>
      </Head>

      <div className="p-6 main-container">
        <h1>Contato</h1>

        <form onSubmit={contactZOFE}>
          <div className="mb-6">
            <label>
              Nome: <br />
              <input type="text" name="name" className="w-2/3 px-4 py-3" />
            </label>
          </div>
          <div className="mb-6">
            <label>
              Email: <br />
              <input type="email" name="email" className="w-2/3 px-4 py-3" />
            </label>
          </div>
          <div className="mb-6">
            <label>
              Mensagem:
              <br />
              <textarea
                name="message"
                id="message"
                maxLength={1024}
                onChange={updateMessage}
                className="h-96 w-2/3 px-4 py-3"
              />
            </label>
            <div className="w-2/3 text-right">
              <span>{message.length}</span> de <span>1024</span> caracteres
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="border-4 border-zofe rounded-xl bg-yellow-300 px-4 py-3 dark:text-gray-900"
            >
              Enviar
            </button>
          </div>
        </form>
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

export default ContactPage
