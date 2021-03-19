const EPISODE_GRAPHQL_FIELDS = `
slug
title
episodeNumber
publishDate
audioUrl
audioFileLength
duration
durationMeta
cover {
  url
}
postText
episodeGuideCollection {
  items {
    timestamp
    title
    url
  }
}
`

const FEED_EPISODES_GRAPHQL_FIELDS = `
slug
title
episodeNumber
publishDate
audioUrl
audioFileLength
duration
durationMeta
cover {
  url
}
postText
episodeGuideCollection {
  items {
    timestamp
    title
    url
  }
}
`

const EPISODES_GRAPHQL_FIELDS = `
slug
title
episodeNumber
audioUrl
publishDate
`

const LATEST_EPISODE_GRAPHQL_FIELDS = `
slug
title
episodeNumber
publishDate
cover {
  url
}
`

async function fetchGraphQL(query: string, preview = false) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
    },
    body: JSON.stringify({ query }),
  }).then(response => response.json())
}

function extractPost(fetchResponse: any) {
  return fetchResponse?.data?.episodeCollection?.items?.[ 0 ]
}

function extractPostEpisodes(fetchResponse: any) {
  return fetchResponse?.data?.episodeCollection?.items
}

export async function getPreviewPostBySlug(slug: string) {
  const entry = await fetchGraphQL(
    `query {
      episodeCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${EPISODES_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  )
  return extractPost(entry)
}

export async function getAllEpisodes() {
  const episodes = await fetchGraphQL(
    `query {
      episodeCollection(where: { slug_exists: true }, order: episodeNumber_DESC) {
        items {
          ${EPISODES_GRAPHQL_FIELDS}
        }
      }
    }`,
  )
  return extractPostEpisodes(episodes)
}

export async function getFeedEpisodes() {
  const episodes = await fetchGraphQL(
    `query {
      episodeCollection(where: { slug_exists: true }, order: episodeNumber_DESC) {
        items {
          ${FEED_EPISODES_GRAPHQL_FIELDS}
        }
      }
    }`,
  )
  return extractPostEpisodes(episodes)
}

export async function getLatestEpisode(preview = false) {
  const episode = await fetchGraphQL(
    `query {
      episodeCollection(
        order: episodeNumber_DESC,
        preview: ${preview},
        limit: 1
      )
      {
        items {
          ${LATEST_EPISODE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  )
  return extractPostEpisodes(episode)
}

export async function getEpisode(slug: string, preview = false) {
  const episode = await fetchGraphQL(
    `query {
      episodeCollection(
        where: { slug: "${slug}" },
        preview: ${preview},
        limit: 1
      )
      {
        items {
          ${EPISODE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  )

  return {
    episode: extractPost(episode),
  }
}
