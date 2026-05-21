import './Footer.css'

function Footer() {
  return (
    <>
      {/* Education */}
      <section className="education section" id="education">
        <div className="container">
          <p className="section-label">Education</p>
          <h2 className="section-title">Background</h2>

          <div className="education__card">
            <div className="education__left">
              <span className="education__period">Aug 2023 — Jul 2027</span>
            </div>
            <div className="education__right">
              <h3 className="education__degree">
                B.Tech, Computer Science Engineering
              </h3>
              <p className="education__school">
                Vellore Institute of Technology — Vellore, India
              </p>
              <p className="education__cgpa">
                CGPA: <span>8.64</span>
              </p>
              <div className="education__tags">
                {[
                  'Data Structures & Algorithms',
                  'OOP',
                  'DBMS',
                  'Operating Systems',
                  'Machine Learning',
                ].map(tag => (
                  <span key={tag} className="education__tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact section" id="contact">
        <div className="container">
          <p className="section-label">Contact</p>
          <h2 className="contact__heading">
            Open to opportunities
          </h2>
          <p className="contact__sub">
            I am actively looking for SDE and AI/ML internship and full-time roles.
            If you have an opportunity or just want to connect — reach out.
          </p>
          <a
            href="mailto:ayush.chauhan12@gmail.com"
            className="contact__btn"
          >
            Say Hello ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__name">Ayush Chauhan</span>
          <div className="footer__links">
            <a
              href="https://github.com/ayushchauhan1204"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-chauhan-644426378/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ayush.chauhan12@gmail.com"
              className="footer__link"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
