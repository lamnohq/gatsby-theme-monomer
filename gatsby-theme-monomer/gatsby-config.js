const path = require("path")
const withDefaults = require(`./src/utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)

  return {
    siteMetadata: {
      title: `Site Title Placeholder`,
      author: `Name Placeholder`,
      description: `Description placeholder`,
      facebook: `lamnohq`,
      github: `lamnohq`,
      twitter: `lamnohq`,
      linkedin: `company/lamno`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${options.contentPath}/blog`,
          name: `blog`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${options.contentPath}/snippets`,
          name: `snippets`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${options.contentPath}/assets`,
          name: `assets`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: `@anindha/gatsby-remark-oembed`,
              options: { unfurl: true },
            },
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 10000,
                linkImagesToOriginal: false,
                quality: 80,
                withWebp: true,
              },
            },
          ],
        },
      },
      {
        resolve: "gatsby-plugin-typography",
        options: {
          pathToConfigModule: path.join(__dirname, `src/utils/typography`),
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-twitter`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
  }
}
