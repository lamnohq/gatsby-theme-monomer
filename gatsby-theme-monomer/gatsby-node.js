const _ = require(`lodash`)
const fs = require(`fs`)
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const mkdirp = require(`mkdirp`)
const Debug = require(`debug`)

const debug = Debug(`gatsby-theme-blog-monomer`)
const withDefaults = require(`./src/utils/default-options`)

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()
  const { contentPath } = withDefaults(themeOptions)

  const dirs = ["blog", "snippets", "assets"].map(subdir =>
    path.join(program.directory, contentPath, subdir)
  )

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const fileNode = getNode(node.parent)
    let slug = node.frontmatter.slug
    if (fileNode.sourceInstanceName === `blog`) {
      slug = `/blog/${slug}`
    } else if (fileNode.sourceInstanceName === `snippets`) {
      slug = `/snippets/${slug}`
    }
    createNodeField({ node, name: `slug`, value: slug })
  }
}

const BlogPostTemplate = require.resolve(`./src/templates/blog-post`)
const BlogTemplate = require.resolve(`./src/templates/blog`)
const SnippetTemplate = require.resolve(`./src/templates/snippet`)
const SnippetsTemplate = require.resolve(`./src/templates/snippets`)

const BlogPostsPerPage = 8
const SnippetsPerPage = 8

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions
  createPostsSection(`blog`, graphql, createPage, BlogPostsPerPage, reporter)
  createPostsSection(`snippets`, graphql, createPage, SnippetsPerPage, reporter)
}

const createPostsSection = async (
  section,
  graphql,
  createPage,
  postsPerPage,
  reporter
) => {
  const { data, errors } = await getPostsData(section, graphql)

  if (errors) throw errors

  const posts = data.allMdx.nodes

  createPostPages(section, posts, createPage, reporter)
  createListingPages(section, posts, createPage, postsPerPage, reporter)
}

const getPostsData = async (section, graphql) => {
  return await graphql(`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { slug: { regex: "//${section}//" } } }
        limit: 10000
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
          }
        }
      }
    }
  `)
}

const createPostPages = (section, posts, createPage, reporter) => {
  posts.forEach((post, index) => {
    let next = index === 0 ? null : posts[index - 1]
    const prev = index === posts.length - 1 ? null : posts[index + 1]

    createPage({
      path: `${post.fields.slug}`,
      component: slash(section === `blog` ? BlogPostTemplate : SnippetTemplate),
      context: {
        slug: post.fields.slug,
        prev: prev && {
          title: post.frontmatter.title,
          link: prev.fields.slug,
        },
        next: next && {
          title: next.frontmatter.title,
          link: next.fields.slug,
        },
      },
    })
  })
}

const createListingPages = (
  section,
  posts,
  createPage,
  postsPerPage,
  reporter
) => {
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({
    length: numPages,
  }).forEach((_, i) => {
    let path
    if (i == 0) {
      path = section === `snippets` ? `/` : `/blog`
    } else {
      path = section === `snippets` ? `/page/${i + 1}` : `/blog/page/${i + 1}`
    }

    let skip = i * postsPerPage

    createPage({
      path,
      component: slash(section === `blog` ? BlogTemplate : SnippetsTemplate),
      context: {
        sectionRegex: `/^/${section}//`,
        limit: postsPerPage,
        skip: skip,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
