import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link2 as LinkIcon } from "react-feather"

export default ({ date, slug, title, comment, tags, body }) => (
  <article className="snippet-card">
    <div className="snippet-card__header">
      <span className="snippet-card__header__date">
        shared on {moment(date).format("ll")}
      </span>
      <Link to={slug} className="snippet-card__header__link">
        <LinkIcon strokeWidth="1.7" width="20px" />
      </Link>
    </div>
    <h2>{title}</h2>
    <p className="snippet-card__comment">{comment}</p>
    <div className="snippet-card__tags">
      {tags.map(tag => (
        <Link to={`/search/${tag}`} className="snippet-card__tag">
          {tag}
        </Link>
      ))}
    </div>
    <MDXRenderer>{body}</MDXRenderer>
  </article>
)
