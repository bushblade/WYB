module.exports = {
  siteMetadata: {
    title: `West Yorkshire Bushcraft`,
    description: `The greatest Bushcraft Community in West Yorkshire, established 2012.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `West Yorkshire bushcraft`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#decd87`,
        theme_color: `#decd87`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quintessential`,
          `source sans pro\:300,400,400i,700`,
          `Lora\:400i`, // you can also specify font weights and styles
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
