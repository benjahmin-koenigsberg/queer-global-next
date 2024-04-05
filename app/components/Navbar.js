'use client'
import "../styles/Navbar.css"
import Image from 'next/image'
import Logo from '../assets/qc-logo.png'
import { useState } from "react"

function Navbar() {

const [hamburger, setHambergur] = useState(true)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-black  px-4">
        <a className="navbar-brand" href="#">
          <Image src={Logo} width={130} height={90} className="site-logo" alt="Queer global logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setHambergur((prev) => !prev)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${hamburger ? "collapse" : "" } navbar-collapse`} id="navbarNavAltMarkup"  >
          <div className=" navbar-nav ms-auto site-navbar" >
            <a className="nav-item nav-link" href="#">ABOUT US</a>
            <a className="nav-item nav-link" href="#">RESOURCES</a>
            <a className="nav-item nav-link" href="#">BLOG</a>
            <a className="nav-item nav-link" href="#">CONTACT US</a>
            <a className="nav-item nav-link" href="#">DONATE</a>
          </div>
        </div>
      </nav>
    </>

  )
}
export default Navbar
