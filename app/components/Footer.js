import "../styles/Footer.css"
import Logo from '../assets/qgIcon.png'
import Image from "next/image"

function Footer() {
    return (
        <footer>
            <div className="footer-border"></div>
            <section className="ft-main">
                <div className="ft-main-item">
                    <h2 className="ft-title">Get To Know Us</h2>
                    <section className="ft-social">
                        <ul className="ft-social-list">
                            <li><a href="/https://www.facebook.com/QueerGlobal/"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/queerglobal_"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/queerglobal/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://github.com/QueerGlobal"><i className="fab fa-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/queer-global/"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UCrCfMMvNB2Sy-vYQbtOIMcQ"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                        <h3>recruiter@queerglobal.com</h3>
                    </section>

                </div>
                <div className="ft-main-item">
                    <Image className="qg-footer-logo" src={Logo} height={100} width={70} />
                </div>
                <div className="ft-main-item">
                    <ul>
                        <li><a href="/blog.html">Blog</a></li>
                        <li><a href="/about.html">About</a></li>
                        <li><a href="/resources.html">Resources</a></li>
                        <li><a href="/donate.html">Donate</a></li>
                        <li><a href="/contact.html">Contact Us</a></li>
                    </ul>
                </div>

            </section>
            <section className="ft-legal">
                <ul className="ft-legal-list">
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li>&copy; 2023 Queer Global.</li>
                </ul>
            </section>
        </footer>
    )
}
export default Footer
