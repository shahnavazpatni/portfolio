import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import './Education.css'

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'L. J. Institute of Computer Applications',
      location: 'Ahmedabad, India',
      duration: '2014 – 2017',
      grade: 'CGPA: 7.83',
      description:
        'Postgraduate program affiliated with Gujarat Technological University, focused on software engineering, systems design, data structures, algorithms and web development.',
      achievements: [
        "Consistently ranked among the top 10% of the class",
        "Successfully completed multiple academic projects with real-world applications",
        "Actively participated in coding competitions and hackathons",
        "Led team-based projects demonstrating leadership and collaboration skills",
        "Recognized for strong problem-solving and analytical skills"
      ],
      coursework: [
        'Software Engineering',
        'Database Management Systems',
        'Data Structures & Algorithms',
        'Web Technologies',
        'Cloud Computing',
        'Computer Networks',
        'Object-Oriented Programming',
        'Operating Systems'
      ]
    }
  ]

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-header">
          <h2 className="education-title">Education</h2>
          <p className="education-subtitle">
            Academic journey and qualifications that shaped my technical foundation
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div className="education-item" key={index}>
              <div className="education-card">
                <div className="education-main">
                  <div className="education-icon">
                    <GraduationCap className="graduation-icon" />
                  </div>

                  <div className="education-content">
                    <div className="education-header-info">
                      <h3 className="education-degree">{edu.degree}</h3>
                      <p className="education-university">Gujarat Technological University</p>
                      <div className="education-meta">
                        <div className="education-institution">
                          <MapPin className="meta-icon" />
                          <span>{edu.institution}, {edu.location}</span>
                        </div>
                        <div className="education-duration">
                          <Calendar className="meta-icon" />
                          <span>{edu.duration}</span>
                        </div>
                        {edu.grade && (
                          <div className="education-grade">
                            <Award className="meta-icon" />
                            <span>{edu.grade}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="education-description">{edu.description}</p>

                    <div className="education-details">
                      <div className="education-achievements">
                        <h4 className="details-title">Key Achievements</h4>
                        <ul className="achievements-list">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="achievement-item">{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="education-coursework">
                        <h4 className="details-title">Relevant Coursework</h4>
                        <div className="coursework-tags">
                          {edu.coursework.map((course, idx) => (
                            <span key={idx} className="coursework-tag">{course}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {index < educationData.length - 1 && (
                <div className="timeline-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
