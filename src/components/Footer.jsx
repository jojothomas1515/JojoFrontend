import React from 'react';
import '../css/components/footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faGithub, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
    return (
        <footer className="footer contain">
            <div className="copyright">
                <h3>JojoPage</h3>
                <p><em>copyright&copy;2022</em></p>
            </div>
            <ul className="social-con">
                <li className="social-links"><FontAwesomeIcon icon={faFacebook}/></li>
                <li className="social-links"><FontAwesomeIcon icon={faTwitter}/></li>
                <li className="social-links"><FontAwesomeIcon icon={faGithub}/></li>
                <li className="social-links"><FontAwesomeIcon icon={faInstagram}/></li>
                <li className="social-links"><FontAwesomeIcon icon={faLinkedin}/></li>
            </ul>

        </footer>
    );
}

export default Footer;
