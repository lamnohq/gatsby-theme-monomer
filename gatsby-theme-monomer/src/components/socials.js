import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { Facebook, GitHub, Twitter, Linkedin } from "react-feather"

const SocialIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          facebook
          github
          twitter
          linkedin
        }
      }
    }
  `)

  const socials = data.site.siteMetadata

  const iconProps = { width: 20, height: 20, strokeWidth: "1.3" }
  const newTab = { target: "_blank", rel: "noopener noreferrer" }

  return (
    <SocialIcons>
      <a href={`https://fb.com/${socials.facebook}`} {...newTab}>
        <Facebook {...iconProps} />
      </a>
      <a href={`https://github.com/${socials.github}`} {...newTab}>
        <GitHub {...iconProps} />
      </a>
      <a href={`https://twitter.com/${socials.twitter}`} {...newTab}>
        <Twitter {...iconProps} />
      </a>
      <a href={`https://linkedin.com/${socials.linkedin}`} {...newTab}>
        <Linkedin {...iconProps} />
      </a>
    </SocialIcons>
  )
}
