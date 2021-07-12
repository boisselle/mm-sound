import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links">
          {/* {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })} */}
        </div>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span>Metamorph Sound</span> all rights reserved
        </h4>
        Site by <a href="https://www.boisselle.com">Boisselle Digital</a>
      </div>
    </footer>
  )
}

export default Footer
