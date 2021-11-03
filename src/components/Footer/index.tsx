
import './styles.scss'

import facebookLogo from '../../assets/images/facebook.png';
import twitterLogo from '../../assets/images/twitter.png';
import linkedinLogo from '../../assets/images/linkedin.png';
import instagramLogo from '../../assets/images/instagram.png';
import githubLogo from '../../assets/images/github.png';

export function Footer() {
    return (
        <footer className="footer-page">
            <div className="footer-icons">
                <div><img className="icon facebook-icon" src={facebookLogo} alt="Facebook" /></div>
                <div><img className="icon twitter-icon" src={twitterLogo} alt="Twitter" /></div>
                <div><img className="icon linkedin-icon" src={linkedinLogo} alt="LinkedIn" /></div>
                <div><img className="icon instagram-icon" src={instagramLogo} alt="Instagram" /></div>
                <div><img className="icon github-icon" src={githubLogo} alt="GitHub" /></div>
            </div>
            <div className="footer-nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="#speakers">Team</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <p>© 2021 <a target="_blank" href="https://github.com/brunofilho1/">Bruno Filho</a> | All Rights Reserved</p>
        </footer>
    )
}