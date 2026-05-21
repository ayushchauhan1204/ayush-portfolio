import './Skills.css'

const skillGroups = [
  {
    label: 'ML & Data',
    skills: ['Python', 'scikit-learn', 'OpenCV', 'NumPy', 'Pandas', 'VADER NLP'],
  },
  {
    label: 'AI & LLM',
    skills: ['Claude Vision API', 'LLM Integration', 'Prompt Engineering', 'Databricks'],
  },
  {
    label: 'Web & Backend',
    skills: ['ReactJS', 'Angular', 'NodeJS', 'HTML/CSS', 'Oracle APEX'],
  },
  {
    label: 'Databases',
    skills: ['SQL', 'PL/SQL', 'MongoDB', 'Supabase'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['AWS', 'Docker', 'Git', 'Streamlit', 'Apigee'],
  },
]

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">

        <p className="section-label">Skills</p>
        <h2 className="section-title">What I work with</h2>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skills__group">
              <p className="skills__group-label">{group.label}</p>
              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
