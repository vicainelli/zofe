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

const EPISODES_GRAPHQL_FIELDS = `
slug
title
episodeNumber
publishDate
`

async function fetchGraphQL(query, preview = false) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
    },
    body: JSON.stringify({ query }),
  }).then(response => response.json())
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.episodeCollection?.items?.[0]
}

function extractPostEpisodes(fetchResponse) {
  return fetchResponse?.data?.episodeCollection?.items
}

export async function getPreviewPostBySlug(slug) {
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
  const entries = await fetchGraphQL(
    `query {
      episodeCollection(where: { slug_exists: true }, order: episodeNumber_DESC) {
        items {
          ${EPISODES_GRAPHQL_FIELDS}
        }
      }
    }`,
  )
  return extractPostEpisodes(entries)
}

export async function getEpisode(slug, preview = false) {
  const episode = await fetchGraphQL(
    `query {
      episodeCollection(where: { slug: "${slug}" },
        preview: ${preview ? 'true' : 'false'},
      limit: 1) {
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
