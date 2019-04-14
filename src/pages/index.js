import React from "react"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import BillboardStyles from "../components/billboard.module.scss"
import ButtonStyles from "../components/button.module.scss"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import Logo from "../images/logo.svg"

export default ({ data }) => (
  <Layout>
    <Metatags
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      thumbnail=""
      url={data.site.siteMetadata.siteURL}
      pathname=""
    />
    <div className={BillboardStyles.billboard}>
      <div className={BillboardStyles.caption}>  
        <img src={Logo} alt="ingrid" title="ingrid"/>
        <h1>A seamless tiling grid template, for&nbsp;Instagram</h1>
        <p>Ingrid is a free Sketch template, for building seamless tiling Instagram compositions.</p>

        <div className={BillboardStyles.callstoaction}>
          <a className={ButtonStyles.primary} href="https://github.com/BrettJay/ingrid/releases/download/1/ingrid.sketch">Download</a>
          <a className={ButtonStyles.secondary} href="https://github.com/BrettJay/ingrid">View on Github</a>
        </div>
      </div>
      <div className={BillboardStyles.image}>
        <div className={BillboardStyles.imageWrapper}>
          <Img fluid={data.file.childImageSharp.fluid}/>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`
