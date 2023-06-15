const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer_container">
        <p>
          © {new Date().getFullYear()} Kisa's portfolio
        </p>
        <div className="social_icons">
          <a
            href="https://twitter.com/shk4346"
            aria-label="Twitter"
            target="_brank"
            rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/skisa31"
            aria-label="Github"
            target="_brank"
            rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;