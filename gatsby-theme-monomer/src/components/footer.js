import React from "react"
import styled from "@emotion/styled"
import { Heart } from "react-feather"
import Socials from "./socials"

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #afafaf;
  margin-top: 66px;
  padding-top: 20px;
  padding-bottom: 40px;
  max-width: 730px;
  margin: 0 auto;
`

export default () => {
  return (
    <Container>
      <div className="footer__made">
        Crafted in Sydney with{" "}
        <Heart fill="red" stroke="red" width={12} height={12} /> by{" "}
        <a href="https://www.lamno.com/">Lamno</a> and{" "}
        <a href="http://dorukdemircioglu.com/">Doruk</a> using{" "}
        <a href="https://www.gatsbyjs.org/">Gatsby</a>
        {"."}
      </div>
      <Socials />
    </Container>
  )
}
