import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Code,
  Database,
  Server,
  Shield,
  GitBranch,
  Radio
} from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const experienceData = [
    {
      position: 'Senior Software Engineer',
      company: 'Peerbits Solution Pvt. Ltd.',
      location: 'Ahmedabad, India',
      duration: 'October 2022 – Present',
      type: 'Full-time',
      description:
        'Architect and deliver scalable SaaS backend systems using NestJS, TypeScript, and MongoDB. Lead technical architecture discussions, drive performance optimization and debugging of complex backend issues. Actively involved in code reviews, mentoring team members, and implementing best practices to maintain high-quality, maintainable code. Collaborate with cross-functional teams i.e Product Managers, Designers, QA, and DevOps to deliver user-focused solutions on time.',
      achievements: [
        'Improved API performance by ~40% using Redis caching and database query optimization',
        'Implemented worker pool with inter-process communication for efficient event processing in analytics service',
        'Contributed to system architecture decisions, ensuring high availability and fault  tolerance',
        'Mentored 5+ developers and established team development best practices',
        'Collaborated with cross-functional teams to deliver reliable, production-ready features on  time'
      ],
      technologies: [
        'NestJS',
        'Node.js',
        'TypeScript',
        'MongoDB',
        'Redis',
        'REST APIs',
        'Docker',
        'AWS'
      ],
      highlights: [
        { icon: TrendingUp, label: 'API performance', value: '~40% faster' },
        { icon: Code, label: "Code Quality", value: "95% Coverage" },
        { icon: Server, label: "Architecture", value: "Event-driven" },
        { icon: Users, label: 'Mentorship', value: '5+ developers' },
        { icon: GitBranch, label: "Collaboration", value: "Agile & CI/CD Practices" }
      ]
    },
    {
      position: 'Software Engineer',
      company: 'Peerbits Solution Pvt. Ltd.',
      location: 'Ahmedabad, India',
      duration: 'October 2019 – September 2022',
      type: 'Full-time',
      description:
        'Built real-time IoT backends and microservices for high-traffic applications. Focused on MQTT telemetry, Elasticsearch search, secure webhooks, and third-party integrations including payments and OAuth.',
      achievements: [
        'Developed IoT backend services using MQTT for sensor data and automated alerts',
        'Delivered microservices with Node.js (Express), MySQL, and Elasticsearch',
        'Implemented secure webhook flows and integrations for payments and messaging',
        'Contributed to event-driven background processing and containerized deployments (Docker/AWS), reducing deployment time by ~60%'
      ],
      technologies: [
        'Node.js',
        'Express.js',
        'TypeScript',
        'MySQL',
        'Elasticsearch',
        'MQTT',
        'Docker',
        'AWS'
      ],
      highlights: [
        { icon: Radio, label: 'IoT', value: 'MQTT pipelines' },
        { icon: Server, label: 'Architecture', value: 'Microservices' },
        { icon: Shield, label: "Reliability", value: "99.9% Uptime" },
        { icon: Database, label: 'Search & data', value: 'Elasticsearch' },
        { icon: TrendingUp, label: 'DevOps', value: '~60% faster deploys' },
        { icon: Shield, label: 'Integrations', value: 'Webhooks & OAuth' },
        { icon: Code, label: 'APIs', value: 'Express services' }
      ]
    },
    {
      position: 'PHP Developer',
      company: 'Peerbits Solution Pvt. Ltd.',
      location: 'Ahmedabad, India',
      duration: 'July 2017 – September 2019',
      type: 'Full-time',
      description:
        'Built enterprise web applications with Laravel, Symfony, and Yii using MySQL and PostgreSQL. Created Vue.js and AJAX-driven frontends, optimized queries and indexes, and maintained legacy systems through refactoring.',
      achievements: [
        'Shipped backend modules and complex business logic for enterprise clients',
        'Improved database performance through query tuning and indexing strategies',
        'Delivered responsive UIs with Vue.js and AJAX',
        'Participated across the full SDLC: requirements, development, testing, and deployment'
      ],
      technologies: [
        'PHP',
        'Laravel',
        'Symfony',
        'Yii',
        'Vue.js',
        'MySQL',
        'PostgreSQL',
        'JavaScript'
      ],
      highlights: [
        { icon: Code, label: 'Frameworks', value: 'Laravel / Symfony / Yii' },
        { icon: Database, label: 'Databases', value: 'MySQL & PostgreSQL' },
        { icon: Server, label: 'Frontend', value: 'Vue & AJAX' },
        { icon: TrendingUp, label: "40% Performance Boost", value: "Optimization" },
        { icon: Database, label: "High Scalability", value: "Handled 1M+ Records" },
        { icon: Shield, label: 'Quality', value: 'Refactors & fixes' },
        { icon: GitBranch, label: 'SDLC', value: 'End-to-end delivery' }
      ]
    }
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-title">Professional Experience</h2>
          <p className="experience-subtitle">
            My journey through different roles and the impact I&apos;ve made in each position
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-card">
                <div className="experience-main">
                  <div className="experience-icon">
                    <Briefcase className="briefcase-icon" />
                  </div>

                  <div className="experience-content">
                    <div className="experience-header-info">
                      <h3 className="experience-position">{exp.position}</h3>
                      <h4 className="experience-company">{exp.company}</h4>
                      <div className="experience-meta">
                        <div className="experience-location">
                          <MapPin className="meta-icon" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="experience-duration">
                          <Calendar className="meta-icon" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="experience-type">
                          <span className="type-badge">{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    <p className="experience-description">{exp.description}</p>

                    <div className="experience-highlights">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="highlight-item">
                          <highlight.icon className="highlight-icon" />
                          <div className="highlight-content">
                            <span className="highlight-value">{highlight.value}</span>
                            <span className="highlight-label">{highlight.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="experience-details">
                      <div className="experience-achievements">
                        <h4 className="details-title">Key Achievements</h4>
                        <ul className="achievements-list">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="achievement-item">{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="experience-technologies">
                        <h4 className="details-title">Technologies Used</h4>
                        <div className="tech-tags">
                          {exp.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {index < experienceData.length - 1 && (
                <div className="timeline-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
