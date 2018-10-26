import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="DOM IS MY FRIEND! Dan is my friend too, one day ill have a tesla" />
    <p>What a world.</p>
    <img src="http://www.adamelmakias.com/wp-content/uploads/2018/10/TheGatheringDailyLogo.png" alt="" />
  </div>
)