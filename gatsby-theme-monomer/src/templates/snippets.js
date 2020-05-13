import React from "react"
import Column from "react-columns"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"

import { ChevronLeft, ChevronRight } from "react-feather"

import Layout from "../components/layout"
import Snippet from "../components/snippet"

const NavigationContainer = styled(Link)`
  display: flex;
  justify-content: space-between;
  max-width: 730px;
  margin: 30px auto;
`
const Navigation = styled(Link)`
  display: flex;
  align-items: center;
`

export default ({ data, pageContext }) => {
  const snippets = data.allMdx.nodes

  const { numPages, currentPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPageNum =
    currentPage - 1 === 1 ? `` : `page/${(currentPage - 1).toString()}`
  const nextPageNum = (currentPage + 1).toString()
  const prevPageLink = isFirst ? null : `/${prevPageNum}`
  const nextPageLink = isLast ? null : `/page/${nextPageNum}`

  const queries = [
    {
      columns: 2,
      query: "min-width: 769px",
    },
  ]

  return (
    <Layout>
      <Column columns={2} queries={queries} gap={"10px"}>
        {snippets.map(snippet => (
          <Snippet
            date={snippet.frontmatter.date}
            slug={snippet.fields.slug}
            title={snippet.frontmatter.title}
            comment={snippet.frontmatter.comment}
            tags={snippet.frontmatter.tags}
            body={snippet.body}
          />
        ))}
      </Column>

      <NavigationContainer>
        {(prevPageLink && (
          <Navigation to={prevPageLink}>
            <ChevronLeft />
            <span className="blog-post__navigation-title">newer snippets</span>
          </Navigation>
        )) || <div />}

        {(nextPageLink && (
          <Navigation to={nextPageLink}>
            <span className="blog-post__navigation-title">older snippets</span>
            <ChevronRight />
          </Navigation>
        )) || <div />}
      </NavigationContainer>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($sectionRegex: String!, $limit: Int!, $skip: Int!) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date, fields___slug] }
      filter: { fields: { slug: { regex: $sectionRegex } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date
          tags
          author
          excerpt
          comment
        }
        body
      }
    }
  }
`
