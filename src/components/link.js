import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

export default function Intent({ children, to }) {
  return (
    <Link
    cover bg="#f7ed4a"
      className="nav-link"
      to={to}
      activeStyle={{
        color: "white",
      }}
      style={{
        color: "grey",
      }}
    >
      {children}
    </Link>
  )
}
