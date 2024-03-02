import * as React from "react"
import { Link } from "gatsby"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div class="navbar">
      <a href="/">خانه</a>
      <a href="/about">درباره من</a>
      <a href="/contact">تماس با من</a>
    </div>
    <div class="header">
      {/* <h1>پورفولیوی من</h1> */}
      <p style={{ marginTop: "15px" }}>
        {/* سلام من <b>فاطمه رحمانی </b> هستم */}
      </p>
    </div>
  </header>
)

export default Header
