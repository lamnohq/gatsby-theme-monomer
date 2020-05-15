import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import About from "../components/about"

const Container = styled.div`
  max-width: 730px;
  margin: 0 auto;
`

export default () => (
  <Layout>
    <Container>
      <About />
    </Container>
  </Layout>
)
