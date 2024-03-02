import * as React from "react"

import Me from "../images/me.jpg"
import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/about.css"

const AboutPage = () => (
  <Layout>
    <div className="about-part">
      <h1>درباره من </h1>
      <p className="about-me">
        من فاطمه رحمانی هستم. من توسعه دهنده فرانت اند هستم. من از React  برای توسعه برنامه ها استفاده می کنم. من عاشق یادگیری هستم 👩‍💻 
      </p>
      <img
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        src={Me}
      />
    </div>
  </Layout>
)

export const Head = () => <Seo title="درباره من" />

export default AboutPage
