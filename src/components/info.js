import React from "react"

import {
  FaFacebook as Facebook,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>NOVIDADES</span> <br />
        2020
      </div>
      <div className="h1 code mt-4 mb-3">Lançamentos Exclusivos</div>
      <div className="h1 code mt-4 mb-3">nos aguardam dia 6 de Janeiro</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://instagram.com/ziromoda">
          <Insta />
        </a>
        <a className="mr-5 icon" href="https://facebook.com/ziromodabr">
          <Facebook />
        </a>
        <a className="mr-5 icon" href="mailto://contato@ziromoda.com.br">
          <Mail />
        </a>
      </div>
    </div>
  )
}
