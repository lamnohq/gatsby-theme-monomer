import React from "react"
import styled from "@emotion/styled"
import SiteMetadata from "./site-metadata"
import Header from "./header"
import MobileHeader from "./mobile-header"
import Footer from "./footer"

const Container = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding: 30px 20px;
  max-width: 1200px;

  @media (max-width: 649px) {
    padding-top: 100px;
  }
`

export default ({ children }) => {
  return (
    <>
      <SiteMetadata />
      <MobileHeader />
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  )
}
