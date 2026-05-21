import './About.css'

const stats = [
  { value: '8.64', label: 'CGPA' },
  { value: '2+',   label: 'Internships' },
  { value: '2',   label: 'Projects Built' },
  { value: '4th',  label: 'Year @ VIT' },
]

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <p className="section-label">About</p>
        <h2 className="section-title">Who I am</h2>

        <div className="about__grid">

          <div className="about__text">
            <p className="about__para">
              I am a Computer Science undergrad at VIT Vellore with a focus on
              building systems that actually work in production — not just demos.
              My work sits at the intersection of machine learning and full stack
              engineering.
            </p>
            <p className="about__para">
              I have shipped an AI-powered stock intelligence platform integrating
              ML forecasting, NLP sentiment analysis, and portfolio optimization.
              On the backend side, I have worked on Oracle APEX systems and
              PL/SQL pipelines at Rostan Technologies, and I am currently working
              on enterprise AI workflows at Virtusa.
            </p>
            <p className="about__para">
              I care about clean architecture, readable code, and building things
              that solve real problems. Currently looking for SDE and AI/ML
              internship and full-time opportunities.
            </p>

            <div className="about__tags">
              {[
                'Python', 'ReactJS', 'NodeJS',
                'Machine Learning', 'AWS', 'Docker'
              ].map(tag => (
                <span key={tag} className="about__tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="about__stats">
            {stats.map(stat => (
              <div key={stat.label} className="about__stat-card">
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
