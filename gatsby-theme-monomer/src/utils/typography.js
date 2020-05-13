import Typography from "typography"
import hex2rgba from "hex2rgba"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"

const typography = new Typography({
  title: `Monomer Theme`,
  baseFontSize: `24px`,
  baseLineHeight: `36px`,
  scaleRatio: 2,
  googleFonts: [
    {
      name: `Poppins`,
      styles: [`300`, `400`, `500`],
    },
    {
      name: `IBM Plex Mono`,
      styles: [`400`, `500`],
    },
    {
      name: `Didact Gothic`,
      styles: [`400`],
    },
    {
      name: `Prata`,
      styles: [`400`],
    },
  ],
  headerFontFamily: [`Prata`],
  bodyFontFamily: [`Poppins`],
  bodyColor: hex2rgba(`#131313`, 0.87),
  headerColor: hex2rgba(`#000000`, 0.87),
  headerWeight: 400,
  bodyWeight: 300,
  boldWeight: 500,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options) => ({
    body: {
      letterSpacing: "0.25px",
    },
    "h1, h2, h3, h4, h5, h6": {
      letterSpacing: "0.15px",
    },
    a: {
      textDecoration: "none",
      color: options.headerColor,
    },
    "a:visited": {
      color: options.headerColor,
    },
    "a.logo": {
      fontFamily: "IBM Plex Mono",
      color: hex2rgba(`#afafaf`, 0.87),
      fontWeight: "500",
      textDecoration: "none",
      textTransform: "uppercase",
    },
    "nav a": {
      fontFamily: "Didact Gothic",
      textDecoration: "none",
      textTransform: "uppercase",
      fontSize: "14px",
      marginRight: "20px",
      letterSpacing: "1.5px",
    },
    "nav a:hover, nav a.active": {
      borderBottom: "1px solid black",
    },
    ".snippet-card": {
      background: "#fafafa",
      marginBottom: "20px",
      display: "flex",
      padding: "16px",
      flexDirection: "column",
      borderRadius: "2px",
    },
    ".snippet-card__header": {
      display: "flex",
      justifyContent: "space-between",
    },
    "article.snippet-card > h2": {
      fontSize: "24px",
      lineHeight: "32px",
      marginBottom: "8px",
    },
    ".snippet-card iframe, .gatsby-remark-oembed-preview-wrapper": {
      width: "calc(100% + 32px)",
      margin: "0 -16px",
    },
    ".snippet-card > *, .gatsby-remark-oembed-preview-wrapper *": {
      fontSize: "14px",
      lineHeight: "22px",
      margin: 0,
      width: "100%",
    },
    "a.gatsby-remark-oembed-preview-link": {
      margin: 0,
      padding: 0,
    },
    "a.gatsby-remark-oembed-preview-link img": {
      verticalAlign: "bottom",
    },
    "h3.gatsby-remark-oembed-preview-title": {
      fontFamily: "Poppins",
      fontSize: "14px",
      lineHeight: "21px",
      fontWeight: "500",
      marginBottom: "8px",
      padding: "0 32px",
    },
    ".gatsby-remark-oembed-preview-host": {
      fontFamily: "Didact Gothic",
      textTransform: "uppercase",
      fontSize: "10px",
      lineHeight: "16px",
      padding: "0 32px",
      letterSpacing: "1.5px",
      marginTop: "24px",
      marginBottom: "8px",
    },
    ".gatsby-remark-oembed-preview-description": {
      padding: "0 32px",
      paddingBottom: "16px",
    },
    ".snippet-card__header__date": {
      fontFamily: "Didact Gothic",
      fontSize: "12px",
      textTransform: "uppercase",
      lineHeight: "16px",
      letterSpacing: "1.5px",
    },
    ".snippet-card__comment": {
      lineHeight: "22px",
      margin: 0,
    },
    ".snippet-card__tags": {
      margin: "16px 0 20px 0",
    },
    ".snippet-card__tag, a.snippet-card__tag:visited": {
      fontFamily: "IBM Plex Mono",
      fontSize: "12px",
      background: hex2rgba(`#e5e5e5`),
      lineHeight: "22px",
      marginRight: "10px",
      padding: "8px 20px",
      fontWeight: "400",
      borderRadius: "2px",
      color: hex2rgba(`#131313`, 0.87),
      letterSpacing: "0.25px",
      textTransform: "uppercase",
    },
    ".blog-post-preview": {
      marginBottom: "20px",
      background: "#fafafa",
    },
    ".blog-post-preview--content": {
      padding: "16px 16px 16px 16px",
    },
    ".blog-post-preview__date-time": {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "6px",
    },
    ".blog-post-preview__date-time > *": {
      fontFamily: "Didact Gothic",
      fontSize: "10px",
      textTransform: "uppercase",
      lineHeight: "16px",
      letterSpacing: "1.5px",
      verticalAlign: "top",
    },
    ".blog-post-preview h2": {
      fontSize: "36px",
      lineHeight: "49px",
      letterSpacing: "0.15px",
      marginBottom: "6px",
    },
    ".blog-post-preview__excerpt": {
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "22px",
      letterSpacing: "0.25px",
      marginBottom: "6px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    ".blog-post-preview__tags": {
      margin: "16px 0 20px 0",
    },
    ".blog-post-preview__tag, a.blog-post-preview__tag:visited": {
      fontFamily: "IBM Plex Mono",
      fontSize: "12px",
      background: hex2rgba(`#e5e5e5`),
      lineHeight: "22px",
      marginRight: "10px",
      padding: "8px 20px",
      fontWeight: "400",
      borderRadius: "2px",
      color: hex2rgba(`#131313`, 0.87),
      letterSpacing: "0.25px",
      textTransform: "uppercase",
    },
    ".blog-post__date-time": {
      display: "flex",
      justifyContent: "space-between",
      margin: "32px 0 16px 0",
    },
    ".blog-post__date-time > *, .blog-post__author": {
      fontFamily: "Didact Gothic",
      fontSize: "14px",
      textTransform: "uppercase",
      lineHeight: "16px",
      letterSpacing: "1.5px",
    },
    ".blog-post__author": {
      marginTop: "32px",
    },
    ".blog-post__tags": {
      margin: "16px 0 64px 0",
    },
    ".blog-post__tag, a.blog-post__tag:visited": {
      fontFamily: "IBM Plex Mono",
      fontSize: "14px",
      background: hex2rgba(`#e5e5e5`),
      lineHeight: "22px",
      marginRight: "10px",
      padding: "8px 20px",
      fontWeight: "400",
      borderRadius: "2px",
      color: hex2rgba(`#131313`, 0.87),
      letterSpacing: "0.25px",
      textTransform: "uppercase",
    },
    ".blog-post__navigation-title": {
      fontFamily: "Didact Gothic",
      fontSize: "14px",
      textTransform: "uppercase",
      lineHeight: "16px",
      letterSpacing: "1.5px",
    },
    ".footer__made": {
      fontSize: "14px",
      color: hex2rgba(`#afafaf`, 0.87),
      lineHeight: "20px",
      paddingRight: "20px",
    },
    ".footer__made a": {
      font: "14px",
    },
    [MOBILE_MEDIA_QUERY]: {
      h1: {
        fontSize: "24px",
        lineHeight: "33px",
      },
      h2: {
        fontSize: "20px",
        lineHeight: "30px",
      },
      "h1, h2, h3, h4, h5, h6": {
        marginBottom: "6px",
      },
      p: {
        marginBottom: "16px",
      },
      body: {
        fontSize: "16px",
        lineHeight: "24px",
      },
      ".blog-post__date-time": {
        margin: "16px 0 8px 0",
      },
      ".blog-post__author": {
        marginTop: "16px",
      },
      ".blog-post__navigation-title": {
        fontSize: "12px",
      },
      ".blog-post__date-time > *, .blog-post__author": {
        fontSize: "10px",
      },
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
