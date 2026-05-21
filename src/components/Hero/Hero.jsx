import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">

        <div className="hero__intro">
          <span className="hero__greeting">Hi, I am</span>
        </div>

        <h1 className="hero__name">Ayush Chauhan</h1>

        <h2 className="hero__role">
          Full Stack Engineer & AI/ML Developer
        </h2>

        <p className="hero__description">
          Final year CS undergrad at VIT Vellore building end-to-end
          systems from ML pipelines and data engineering to deployed
          web applications. Currently interning at{' '}
          <span className="hero__highlight">Virtusa</span> on enterprise
          AI workflows.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--secondary"
          >
            Resume
          </a>
        </div>

        <div className="hero__links">
          <a
            href="https://github.com/ayushchauhan1204"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
          >
            GitHub
          </a>
          <span className="hero__social-divider">·</span>
          <a
            href="https://www.linkedin.com/in/ayush-chauhan-644426378/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
          >
            LinkedIn
          </a>
          <span className="hero__social-divider">·</span>
          <a
            href="mailto:ayush.chauhan12@gmail.com"
            className="hero__social-link"
          >
            Email
          </a>
        </div>

      </div>

      <div className="hero__scroll-indicator">
        <span className="hero__scroll-line" />
      </div>

    </section>
  )
}

export default Hero
