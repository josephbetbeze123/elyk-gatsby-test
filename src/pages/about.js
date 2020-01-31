import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `red` }}>
  <Link to="/contact">Contact</Link>
    <Header headerText="This text is Dan sized"/>
    <p>Dis text is taylor sized</p>
  </div>
)