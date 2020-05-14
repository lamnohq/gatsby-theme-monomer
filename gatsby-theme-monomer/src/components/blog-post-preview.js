import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import moment from "moment"

export default ({
  date,
  slug,
  title,
  excerpt,
  timeToRead,
  tags,
  imageFluid,
}) => (
  <article className="blog-post-preview">
    <Link to={slug}>
      <Image fluid={imageFluid} alt={title} />
    </Link>

    <div className="blog-post-preview--content">
      <Link to={slug}>
        <div className="blog-post-preview__date-time">
          <span className="blog-post-preview__date">
            {moment(date).format("ll")}
          </span>
          <span className="blog-post-preview__time-to-read">
            {timeToRead} min read
          </span>
        </div>
        <h2>{title}</h2>
        <p className="blog-post-preview__excerpt">{excerpt}</p>
      </Link>

      <div className="blog-post-preview__tags">
        {tags.map(tag => (
          <Link
            to={`/search/${tag}`}
            className="blog-post-preview__tag"
            key={tag}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  </article>
)
