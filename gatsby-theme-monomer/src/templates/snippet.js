import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Snippet from "../components/snippet"

export default ({ data }) => {
  const snippet = data.mdx

  return (
    <Layout>
      <Snippet
        date={snippet.frontmatter.date}
        slug={snippet.fields.slug}
        title={snippet.frontmatter.title}
        comment={snippet.frontmatter.comment}
        tags={snippet.frontmatter.tags}
        body={snippet.body}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        author
        date
        excerpt
        comment
        tags
        title
      }
      body
    }
  }
`
