module.exports = {
  siteMetadata: {
    title: `Adam Koltun - Web Developer`,
    description: `Zajmuję się projektowaniem nowoczesnych oraz użytecznych stron internetowych. Projekt powstaje na podstawie strategii opracowanej na danych, zebranych podczas analizy potrzeb użytkowników oraz biznesu. Jego zadaniem jest rozwinięcie Twojej firmy.`,
    author: `Adam Koltun`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `500`],
          },
          {
            family: `Fira Sans`,
            variants: [`400`, `600`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // // {
    // //   resolve: `gatsby-plugin-manifest`,
    // //   options: {
    // //     name: `gatsby-starter-default`,
    // //     short_name: `starter`,
    // //     start_url: `/`,
    // //     background_color: `#663399`,
    // //     theme_color: `#663399`,
    // //     display: `minimal-ui`,
    // //     icon: `src/images/gatsby-icon.png`,
    // //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
