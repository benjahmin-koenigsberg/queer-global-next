'use client'
import "../styles/Navbar.css"
import Image from 'next/image'
import Logo from '../assets/qc-logo.png'
import { useState } from "react"
import { Collapse } from "react-bootstrap"

function Navbar() {

const [hamburger, setHambergur] = useState(true)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-black  px-4">
        <a className="navbar-brand" href="#">
          <Image src={Logo} width={100} height={80} className="site-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setHambergur((prev) => !prev)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${hamburger ? "collapse" : "" } navbar-collapse`} id="navbarNavAltMarkup"  >
          <div className=" navbar-nav ms-auto" >
            <a className="nav-item nav-link" href="#">ABOUT US</a>
            <a className="nav-item nav-link" href="#">RESOURCES</a>
            <a className="nav-item nav-link" href="#">BLOG</a>
            <a className="nav-item nav-link" href="#">CONTACT US</a>
            <a className="nav-item nav-link" href="#">DONATE</a>
          </div>
        </div>
      </nav>

      {/* <header className="header-area">
        <div className="navbar-area">
          <div className="header-container">
            <nav className="site-navbar">
              <Image src={Logo} width={100} height={80} className="site-logo" />

              <ul>
                <li><a href="./about.html">About Us</a></li>
                <li><a href="./resources.html">Resources</a></li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="./contact.html">Contact Us</a></li>
                <li><a href="./donate.html">Donate</a></li>
              </ul>

              <button className="nav-toggler">
                <span></span>
              </button>
            </nav>
          </div>
        </div>
      </header> */}
    </>

  )
}
export default Navbar
