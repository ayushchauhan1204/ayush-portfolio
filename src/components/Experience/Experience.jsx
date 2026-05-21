import './Experience.css'

const experiences = [
  {
    role: 'AI Intern',
    company: 'Virtusa',
    location: 'India',
    period: '2025 — Present',
    type: 'Current',
    points: [
      'Working on enterprise AI and cloud-based systems using modern AI workflows and APIs.',
      'Building and integrating scalable application components within agile development environments.',
      'Collaborating with cross-functional teams on production-grade AI feature development.',
    ],
    tags: ['AI', 'Cloud', 'Enterprise Systems', 'Agile'],
  },
  {
    role: 'Software Development Intern',
    company: 'Rostan Technologies',
    location: 'Gurugram, India',
    period: 'Jun 2024 — Jul 2024',
    type: 'Past',
    points: [
      'Developed 5+ Oracle APEX modules for an internal Scanner Application supporting 50+ daily document scans, improving workflow efficiency by 20%.',
      'Optimized backend data retrieval by refactoring PL/SQL queries with indexed joins, reducing average query latency by 15%.',
      'Implemented input validation and error-handling routines that reduced erroneous production entries by over 40%.',
      'Documented module architecture enabling faster onboarding for two subsequent interns, cutting knowledge-transfer time by 50%.',
    ],
    tags: ['Oracle APEX', 'PL/SQL', 'SQL', 'Backend'],
  },
]

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I have worked</h2>

        <div className="experience__list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience__item">

              <div className="experience__left">
                <span className="experience__period">{exp.period}</span>
                {exp.type === 'Current' && (
                  <span className="experience__badge">Current</span>
                )}
              </div>

              <div className="experience__connector">
                <div className="experience__dot" />
                {index < experiences.length - 1 && (
                  <div className="experience__line" />
                )}
              </div>

              <div className="experience__right">
                <div className="experience__header">
                  <h3 className="experience__role">{exp.role}</h3>
                  <span className="experience__company">
                    {exp.company} — {exp.location}
                  </span>
                </div>

                <ul className="experience__points">
                  {exp.points.map((point, i) => (
                    <li key={i} className="experience__point">{point}</li>
                  ))}
                </ul>

                <div className="experience__tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="experience__tag">{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
