import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <noscript>This site runs best with JavaScript enabled.</noscript>
    </Helmet>
  )
}
