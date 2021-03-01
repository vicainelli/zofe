import type { NowRequest, NowResponse } from '@vercel/node'
import axios from 'axios'

// this was written for Netlify
// refactor?
// deploy as standalone for now?

export async function handler(req: NowRequest, res: NowResponse) {
  const {
    body: { name, email, message },
  } = req
  const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  const timeOptions = {
    timeZone: 'Europe/Berlin',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }
  const now = new Date()
  const discordWebhookURL = process.env.DISCORD_WEBHOOK_URL
  const discordObject = {
    embeds: [
      {
        title: 'Contato via site',
        fields: [
          {
            name: 'Data',
            value: new Intl.DateTimeFormat('pt-BR', dateOptions).format(now),
            inline: true,
          },
          {
            name: 'Hora',
            value: new Intl.DateTimeFormat('pt-BR', timeOptions).format(now),
            inline: true,
          },
          {
            name: 'De',
            value: `${name} ||<${email}>||`,
            inline: false,
          },
          {
            name: 'Mensagem',
            value: message,
            inline: false,
          },
        ],
      },
    ],
  }

  let responseCode = 200

  await axios({
    method: 'POST',
    url: discordWebhookURL,
    headers: {
      'Content-Type': 'application/json',
    },
    data: discordObject,
  }).catch(err => {
    console.log(err)
    responseCode = 500
  })

  return res.status(responseCode).end()
}

export default handler
