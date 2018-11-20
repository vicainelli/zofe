module.exports = {
  siteMetadata: {
    title: 'ZOFE - Zone Of Front-Enders',
    description: 'Podcast com enfoque no desenvolvimento front-end da web. Sempre trazendo novidades, entrevistas, eventos e multiplicando conhecimento. Este podcast é apresentado por Daniel Filho e Isa Silveira.',
    siteUrl: 'https://zofe.com.br',
    twitter: '@zofepod'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allContentfulEpisode } }) => {
    //           return allContentfulEpisode.edges.map(edge => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.excerpt,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               custom_elements: [{ "content:encoded": edge.node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allContentfulEpisode(
    //               sort: { order: DESC, fields: [frontmatter___date] },
    //               filter: {frontmatter: { draft: { ne: true } }}
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt
    //                   html
    //                   fields { slug }
    //                   frontmatter {
    //                     title
    //                     date
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: "/feed/podcast.xml",
    //         title: "Zone Of Front-Enders - Podcast",
    //       },
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
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
  ],
}
