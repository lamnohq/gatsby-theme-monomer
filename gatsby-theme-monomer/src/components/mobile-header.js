import React from "react"
import { slide as Menu } from "react-burger-menu"
import styled from "@emotion/styled"
import hex2rgba from "hex2rgba"
import { Link } from "gatsby"

const StyledMenu = styled.div`
  .bm-burger-button {
    width: 18px;
    height: 12px;
    left: 36px;
    top: 36px;
    position: absolute;
  }

  .bm-burger-bars {
    background: #000000;
  }

  .bm-burger-bars-hover {
    background: #afafaf;
  }

  .bm-cross-button {
    height: 14px;
    width: 14px;
    padding: 20px;
  }

  .bm-cross {
    background: #000000;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  .bm-menu {
    background: ${hex2rgba(`#fafafa`, 0.95)};
    opacity: 95%;
    width: 100%;
  }

  .bm-item-list {
    color: ${hex2rgba(`#000000`, 0.87)};
    padding-top: 50px;
    margin-left: 100px;
  }

  .bm-item {
    font-family: "Didact Gothic";
    font-size: 24px;
    margin-top: 40px;
    outline: none;
  }

  .bm-item:hover,
  .bm-item--active {
    text-decoration: underline;
    outline: none;
    border-bottom: none;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

const Container = styled.header`
  @media (min-width: 649px) {
    display: none;
  }
  position: fixed;
`

const LogoLink = styled(Link)`
  margin-left: 80px;
  display: inline-block;
  top: 28px;
  position: absolute;
`

export default () => (
  <Container>
    <LogoLink to="/" className="logo">
      Monomer
    </LogoLink>
    <StyledMenu>
      <Menu width="100%">
        <Link to="/" activeClassName="bm-item--active">
          Snippets
        </Link>
        <Link
          to="/blog"
          activeClassName="bm-item--active"
          partiallyActive={true}
        >
          Blog
        </Link>
        <Link
          to="/about"
          activeClassName="bm-item--active"
          partiallyActive={true}
        >
          About
        </Link>
        <Link
          to="/gallery"
          activeClassName="bm-item--active"
          partiallyActive={true}
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          activeClassName="bm-item--active"
          partiallyActive={true}
        >
          Contact
        </Link>
      </Menu>
    </StyledMenu>
  </Container>
)
