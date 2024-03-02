import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import "../components/home.css"
import Article from "../components/Article"

const IndexPage = () => (
  <Layout>
    <Article />
  </Layout>
)

export const Head = () => <Seo title="خانه" />

export default IndexPage
