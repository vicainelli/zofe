import type { InferGetStaticPropsType } from 'next'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { getAllEpisodes } from 'lib/api'
import Layout from 'components/layout'

const FIELD_CLASSES = "appearance-none md:w-2/3 md:px-4 w-full px-2 py-3 focus:outline-none focus:ring-2 focus:ring-zofe"

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
    <Layout preview={preview} episodes={allEpisodes} seoProps={{ title: 'Contato' }}>
      <div className="p-6 main-container">
        <h2>Contato</h2>

        <form onSubmit={contactZOFE}>
          <div className="mb-6">
            <label htmlFor="name" className="block">
              Nome
            </label>
            <input
              type="text"
              name="name"
              className={
                `${FIELD_CLASSES}
                rounded-xl
                dark:bg-gray-200
                dark:text-black
                bg-gray-400
                bg-opacity-20
                border-2
                border-zofe
                shadow-sm`}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              className={
                `${FIELD_CLASSES}
                rounded-xl
                dark:bg-gray-200
                dark:text-black
                bg-gray-400
                bg-opacity-20
                border-2
                border-zofe
                shadow-sm`}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              maxLength={1024}
              onChange={updateMessage}
              className={
                `h-96
                ${FIELD_CLASSES}
                rounded-xl
                dark:bg-gray-200
                dark:text-black
                bg-gray-400
                bg-opacity-20
                border-2
                border-zofe
                shadow-sm`
              }
            />
            <small className={`${FIELD_CLASSES} text-right block`}>
              {message.length} de 1024 caracteres
            </small>
          </div>

          <button
            type="submit"
            className={`border-2 border-zofe rounded-xl bg-yellow-300 mt-5 dark:text-gray-900 ${FIELD_CLASSES}`}
          >
            Entrar em contato
          </button>
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
