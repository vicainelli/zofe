module.exports = {
  siteMetadata: {
    title: 'ZOFE - Zone Of Front-Enders',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
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
