import type { NowRequest, NowResponse } from '@vercel/node'
import { getFeedEpisodes } from 'lib/api'
import { AUTHORS, DESCRIPTION, FEED_NAME, SITE_URL } from 'lib/constants'
import type { Episode } from 'types'

async function renderEpisodeData(allEpisodes: Episode[]) {
  const episodes = await allEpisodes

  return episodes.map(episode => {
    return `
      <item>
        <title>${episode.title}</title>
        <itunes:summary>${episode.postText}</itunes:summary>
        <description>${episode.postText}</description>
        <link>${SITE_URL}/episodio/${episode.slug}</link>
        <enclosure url="${episode.audioUrl}" type="audio/mpeg" length="1024"></enclosure>
        <pubDate>Thu, 21 Dec 2016 16:01:07 +0000</pubDate>
        <itunes:author>${AUTHORS}</itunes:author>
        <itunes:duration>${episode.duration}</itunes:duration>
        <itunes:explicit>no</itunes:explicit>
        <guid>${SITE_URL}/episodio/${episode.slug}</guid>
      </item>
`
  })
}

function feedTemplate(podcastEpisodes: string) {
  return `<?xml version="1.0" encoding="utf-8"?>
  <rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
    <channel>
      <title>${FEED_NAME}</title>
      <link>${SITE_URL}</link>
      <language>pt-br</language>
      <copyright>&#x2117; &amp; &#xA9; 2015 Daniel Filho</copyright>
      <itunes:subtitle>${DESCRIPTION}</itunes:subtitle>
      <itunes:author>${AUTHORS}</itunes:author>
      <itunes:summary>${DESCRIPTION}</itunes:summary>
      <itunes:explicit>no</itunes:explicit>
      <description>${DESCRIPTION}</description>
      <itunes:owner>
        <itunes:name>Daniel Filho</itunes:name>
        <itunes:email>daniel@zofe.com.br</itunes:email>
      </itunes:owner>
      <itunes:image href="https://zofe.com.br/assets/img/zofe300.png" />
      <itunes:category text="Technology">
        <itunes:category text="Tech News"/>
      </itunes:category>

      ${podcastEpisodes}

    </channel>
  </rss>`
}

export default async function feedFunc(req: NowRequest, res: NowResponse) {
  const allEpisodes = await getFeedEpisodes()
  const renderedEpisodes = await renderEpisodeData(allEpisodes)
  const finalTemplate = feedTemplate(renderedEpisodes.join(''))

  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml; charset=utf-8')
    res.end(finalTemplate)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.end()
  }
}
