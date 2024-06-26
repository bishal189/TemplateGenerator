
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import "./Footer.css"

const footer = () => {
    return (
        <div>
            <div className="footer-container">
                <footer className="footer"  >
                    < h4 className="heading">LEGAL DOCUMENTS</ h4>
                    <ul className="no-bullets">
                        <li><a href="https://legaltemplates.net/form/">All Forms</a></li>
                        <li><a href="https://legaltemplates.net/form/lease-agreement/">Lease Agreement</a></li>
                        <li><a href="https://legaltemplates.net/form/power-of-attorney/">Power of Attorney</a></li>
                        <li><a href="https://legaltemplates.net/form/non-disclosure-agreement/">Non-Disclosure Agreement</a></li>
                        <li><a href="https://legaltemplates.net/form/eviction-notice/">Eviction Notice</a></li>
                    </ul>
                </footer>

                <footer className="footer">
                    <h4 className="heading">COMPANY</h4>
                    <ul className="no-bullets">
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Legal resources</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Partner With Us</a></li>
                    </ul>
                </footer>


                <footer className="footer"  >
                    <h4 className="heading">USERS</h4>
                    <ul className="no-bullets">
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Do NOt Sell My Personal Information</a></li>

                    </ul>
                </footer>



            </div>
            <div>
                <footer className="site-footer">
                    <div className="footer-content">
                        <img className="footer-img" src="https://legaltemplates.net/wp-content/themes/genesis-lt-v2/images/mcafee.png" alt="McAfee - Together is power." loading="lazy"></img>
                        <a href="https://www.trustpilot.com/review/legaltemplates.net">
                            <img className="footer-img" src="https://legaltemplates.net/wp-content/themes/genesis-lt-v2/images/trustpilot.png" alt="Trustpilot" loading="lazy"></img>
                        </a>
                        <a href="https://www.bbb.org/us/nc/greensboro/profile/legal-forms/legal-templates-llc-0503-1000007743#sealclick">
                            <img className="footer-img" src="https://legaltemplates.net/wp-content/themes/genesis-lt-v2/images/bbb.png" alt="BBB Accredited Business" loading="lazy"></img>
                        </a>
                    </div>
                    <div className="footer-content">
                        <p>(855) 335-9779, Monday-Friday, 9AM - 7PM EDT</p>
                    </div>
                    <div className="icon">
                        <div className="icon facebook">
                            <FaFacebook />
                        </div>
                        <div className="icon twitter">
                            <FaTwitter />
                        </div>
                        <div className="icon linkedin">
                            <FaLinkedin />
                        </div>
                        <div className="icon youtube">
                            <FaYoutube />
                        </div>
                    </div>


                </footer>
            </div>
            <div>
                <hr />
            </div>
            <div className="text">
                <p className="copyright">Copyright 2024 Legal Templates LLC. Legal Templates LLC is not a lawyer, or a law firm and does not engage in the practice of law. Legal Templates cannot and does not provide legal advice or legal representation. All information, software and services provided on the site are for informational purposes and self-help only and are not intended to be a substitute for a lawyer or professional legal advice. Use of this site is subject to our Terms of Use. Legaltemplates.net is owned and operated by Resume Technologies Limited, London with offices in London United Kingdom.</p>
            </div>


        </div>

    )
}

export default footer