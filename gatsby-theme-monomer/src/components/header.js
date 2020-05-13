import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Socials from "./socials"

const Container = styled.header`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 730px;
  margin-bottom: 64px;
  @media (max-width: 650px) {
    display: none;
  }
`

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`

export default () => {
  return (
    <Container>
      <TopLine>
        <Link to="/" className="logo">
          Monomer
        </Link>

        <Socials />
      </TopLine>

      <nav>
        <Link to="/" activeClassName="active">
          Snippets
        </Link>
        <Link to="/blog" activeClassName="active" partiallyActive={true}>
          Blog
        </Link>
        <Link to="/about" activeClassName="active" partiallyActive={true}>
          About
        </Link>
        <Link to="/gallery" activeClassName="active" partiallyActive={true}>
          Gallery
        </Link>
        <Link to="/contact" activeClassName="active" partiallyActive={true}>
          Contact
        </Link>
      </nav>
    </Container>
  )
}
