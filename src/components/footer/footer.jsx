import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import{FaFacebookF}  from 'react-icons/fa'
import{IoLogoTwitter} from 'react-icons/io'
const footer = () => {
  return (
   <footer>
    <a href="" className="footer__logo">Gopal Patil</a>

    <ul className='permalinks'>
      <li><a href="#"></a>Home</li>
      <li><a href="#about"></a>About</li>
      <li><a href="#experience"></a>Experience</li>
      <li><a href="#services"></a>Services</li>
      <li><a href="#contact"></a>Contact</li>
    </ul>

    <div className="footer__socials">
      <a href="https://facebook.com"><FiInstagram/></a>
      <a href="https://instagram.com"><FaFacebookF/></a>
      <a href="https://twitter.com"><IoLogoTwitter/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy;GK Devloper. all right reserved</small>
    </div>
   </footer>
  )
}

export default footer
