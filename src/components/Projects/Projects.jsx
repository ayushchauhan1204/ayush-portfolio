import './Projects.css'

const projects = [
  {
    number: '01',
    title: 'NiftyMind',
    subtitle: 'AI-Powered Indian Stock Intelligence Platform',
    description:
      'A full-stack AI platform for NSE/BSE markets combining ML-based price forecasting, NLP sentiment analysis, portfolio optimization, and AI-powered chart analysis into a single deployed application.',
    highlights: [
      'Gradient Boosting Regressor with 65-feature matrix for next-day and 5-day price forecasting',
      '3-model IPO success predictor trained on 58 NSE IPOs spanning 2015–2025',
      'Markowitz Mean-Variance portfolio optimizer with 2,000-point Monte Carlo simulation',
      '6-layer data waterfall ensuring zero blank-chart failures under API rate limiting',
    ],
    tags: ['Python', 'scikit-learn', 'Streamlit', 'NLP', 'Claude Vision API'],
    links: {
      live: 'https://niftymind.streamlit.app/',
      github: 'https://github.com/ayushchauhan1204/ai-stock-ml-system',
    },
    featured: true,
  },
  {
    number: '02',
    title: 'Facial Recognition Attendance System',
    subtitle: 'Real-Time ML Attendance Pipeline',
    description:
      'An end-to-end computer vision pipeline for automated attendance tracking — from data capture and preprocessing to live face recognition and structured CSV reporting.',
    highlights: [
      'LBPH classifier trained on 40+ user samples achieving 88% recognition accuracy',
      'Live video stream classification at 20 FPS using OpenCV',
      'Reduced attendance recording time by 90% — from 10 minutes to under 1 minute',
      '200+ timestamped records maintained in structured CSV format',
    ],
    tags: ['Python', 'OpenCV', 'LBPH', 'NumPy', 'Pandas'],
    links: {
      github: 'https://github.com/ayushchauhan1204/face-recognition-attendance-system',
    },
    featured: false,
  },
]

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">

        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I have built</h2>

        <div className="projects__list">
          {projects.map((project) => (
            <div
              key={project.number}
              className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
            >
              <div className="project-card__top">
                <span className="project-card__number">{project.number}</span>
                <div className="project-card__links">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                    >
                      Live App ↗
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__subtitle">{project.subtitle}</p>
              <p className="project-card__description">{project.description}</p>

              <ul className="project-card__highlights">
                {project.highlights.map((point, i) => (
                  <li key={i} className="project-card__highlight">{point}</li>
                ))}
              </ul>

              <div className="project-card__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
