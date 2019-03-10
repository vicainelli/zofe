module.exports = {
  siteMetadata: {
    title: 'ZOFE - Zone Of Front-Enders',
    description:
      'Podcast com enfoque no desenvolvimento front-end da web. Sempre trazendo novidades, entrevistas, eventos e multiplicando conhecimento. Este podcast é apresentado por Daniel Filho e Isa Silveira.',
    siteUrl: 'https://zofe.com.br',
    summary:
      'Um podcast quinzenal que aborda assuntos relacionados ao desenvolvimento para a internet, trazendo notícias, cobrindo eventos e entrevistas com nomes de expressão no desenvolvimento web nacional e mundial.',
    twitter: '@zofepod',
    author: 'Zone Of Front-Enders',
    podcast: {
      explicit: 'no',
      image: 'https://zofe.com.br/assets/img/zofe300.png',
      owner: 'Danie Filho',
      email: 'daniel@zofe.com.br',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'zone-of-front-enders',
        short_name: 'zofe',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/logo-header.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                site_url: siteUrl
                author
                summary
                twitter
                podcast {
                  explicit
                  image
                  owner
                  email
                }
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulEpisode } }) => {
              return allContentfulEpisode.edges.map(edge => {
                return Object.assign({}, edge.node.id, {
                  id: `${site.siteMetadata.site_url}/${edge.node.slug}`,
                  guid: edge.node.audioUrl,
                  updated: edge.node.updatedAt,
                  url: `${site.siteMetadata.site_url}/${edge.node.slug}`,
                  title: edge.node.title,
                  author: site.siteMetadata.author,
                  description: edge.node.postText.postText,
                  enclosure: {
                    file: edge.node.audioUrl,
                    size: edge.node.audioFileLength,
                    type: 'audio/x-m4a',
                  },
                  custom_namespaces: {
                    itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd',
                  },
                  custom_elements: [
                    {
                      'itunes:category': {
                        _attr: {
                          text: 'Technology',
                        },
                        'itunes:category': {
                          _attr: {
                            text: 'Tech News',
                          },
                        },
                      },
                    },
                    {
                      'itunes:subtitle': site.siteMetadata.description,
                    },
                    {
                      'itunes:author': site.siteMetadata.author,
                    },
                    {
                      'itunes:summary': edge.node.postText.postText,
                    },
                    {
                      'itunes:explicit': site.siteMetadata.podcast.explicit,
                    },
                    {
                      'itunes:image': {
                        _attr: {
                          href: edge.node.cover.file.url,
                        },
                      },
                    },
                    {
                      'content:encoded': edge.node.postText.postText,
                    },
                  ],
                })
              })
            },
            query: `
              {
                allContentfulEpisode(
                  filter: { node_locale: { eq: "pt-BR" } }
                  sort: { fields: [episodeNumber], order: DESC }
                ) {
                  edges {
                    node {
                      title
                      slug
                      updatedAt
                      audioUrl
                      audioFileLength
                      postText {
                        postText
                      }
                      cover {
                        file {
                          url
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/feed/podcast.xml',
            title: 'Zone Of Front-Enders - Podcast',
          },
        ],
      },
    },
  ],
}
