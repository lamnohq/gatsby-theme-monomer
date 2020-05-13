import React from "react"
import Column from "react-columns"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import { ChevronLeft, ChevronRight } from "react-feather"

import Layout from "../components/layout"
import BlogPostPreview from "../components/blog-post-preview"

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
  const posts = data.allMdx.nodes

  const { numPages, currentPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPageNum =
    currentPage - 1 === 1 ? `` : `/blog/page/${(currentPage - 1).toString()}`
  const nextPageNum = (currentPage + 1).toString()
  const prevPageLink = isFirst ? null : `/blog/${prevPageNum}`
  const nextPageLink = isLast ? null : `/blog/page/${nextPageNum}`

  const queries = [
    {
      columns: 2,
      query: "min-width: 576px",
    },
  ]

  return (
    <Layout>
      <Column columns={2} queries={queries} gap={"10px"}>
        {posts.map(post => (
          <BlogPostPreview
            date={post.frontmatter.date}
            slug={post.fields.slug}
            title={post.frontmatter.title}
            excerpt={post.frontmatter.excerpt}
            timeToRead={post.timeToRead}
            tags={post.frontmatter.tags}
            imageFluid={post.frontmatter.hero.sharp.fluid}
          />
        ))}
      </Column>

      <NavigationContainer>
        {(prevPageLink && (
          <Navigation to={prevPageLink}>
            <ChevronLeft />
            <span className="blog-post__navigation-title">newer posts</span>
          </Navigation>
        )) || <div />}

        {(nextPageLink && (
          <Navigation to={nextPageLink}>
            <span className="blog-post__navigation-title">older posts</span>
            <ChevronRight />
          </Navigation>
        )) || <div />}
      </NavigationContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($sectionRegex: String!, $skip: Int!, $limit: Int!) {
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
          hero {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        timeToRead
      }
    }
  }
`
