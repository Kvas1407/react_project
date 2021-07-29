import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer">
        <h1>shoe streak</h1>
        <ul className="social">
          <li><a href="#"><span className="material-icons">face</span></a></li>
          <li><a href="#"><span className="material-icons">camera_alt</span></a></li>
          <li><a href="#"><span className="material-icons">alternate_email</span></a></li>
          <li><a href="#" className="footer-link">About</a></li>
          <li><a href="#" className="footer-link">Email</a></li>
          <li><a href="#" className="footer-link">Contact</a></li>
        </ul>
        <nav aria-label="Legal">
          <ul className="legal">
            <li><a href="#" className="link-end">Terms of Use</a></li>
            <li><a href="#" className="link-end">Privacy Policy</a></li>
            <li><a href="#" className="link-end">Accessibility Policy</a></li>
          </ul>
        </nav>
        <p className="copyright">&copy; Copyright, 1991.</p>
      </footer>
    )
}

export default Footer