import React from "react"
import moment from "moment"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ChevronLeft, ChevronRight } from "react-feather"

import Layout from "../components/layout"

export default ({ data, pageContext }) => {
  const post = data.mdx

  const Container = styled.article`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    max-width: 730px;
    margin-bottom: 64px;
  `

  const NavigationContainer = styled(Link)`
    display: flex;
    justify-content: space-between;
  `
  const Navigation = styled(Link)`
    display: flex;
    align-items: center;
  `
  const Right = styled.span`
    display: flex;
    justify-content: flex-end;
    text-align: right;
  `
  return (
    <Layout>
      <Container className="blog-post">
        <Image
          fluid={post.frontmatter.hero.sharp.fluid}
          alt={post.frontmatter.title}
        />
        <div className="blog-post__date-time">
          <span>{moment(post.frontmatter.date).format("ll")}</span>
          <span>{post.timeToRead} min read</span>
        </div>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
        <span className="blog-post__author">{post.frontmatter.author}</span>
        <div className="blog-post__tags">
          {post.frontmatter.tags.map(tag => (
            <Link to={`/search/${tag}`} className="blog-post__tag">
              {tag}
            </Link>
          ))}
        </div>
        <NavigationContainer>
          {(pageContext.next && (
            <Navigation to={pageContext.next.link}>
              <ChevronLeft />
              <span className="blog-post__navigation-title">
                next: {pageContext.next.title}
              </span>
            </Navigation>
          )) || <div />}

          {(pageContext.prev && (
            <Navigation to={pageContext.prev.link}>
              <Right className="blog-post__navigation-title">
                prev: {pageContext.prev.title}
              </Right>
              <ChevronRight />
            </Navigation>
          )) || <div />}
        </NavigationContainer>
      </Container>
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
        tags
        title
        hero {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
      timeToRead
    }
  }
`
