import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>404: صفحه یافت نشد</h1>
    <a href="/">برگشت به خانه</a>
  </Layout>
)

export const Head = () => <Seo title="404: صفحه یافت نشد" />

export default NotFoundPage
