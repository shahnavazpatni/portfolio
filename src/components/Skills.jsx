import { useEffect } from 'react'
import './Skills.css'
import { Cloud, Code, Database, Globe, Monitor, Palette, Settings, Star, Wrench, Zap } from 'lucide-react'

const Skills = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.skill-item')
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('loading')
      }, index * 50)
    })
  }, [])

  const skillsData = {
    Languages: {
      icon: <Code className="category-icon" />,
      skills: [
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'PHP' },
        { name: 'Shell Scripting' }
      ]
    },
    Backend: {
      icon: <Settings className="category-icon" />,
      skills: [
        { name: 'Node.js' },
        { name: 'NestJS' },
        { name: 'Express.js' },
        { name: 'Laravel' },
        { name: 'Symfony' },
        { name: 'Yii' }
      ]
    },
    Frontend: {
      icon: <Palette className="category-icon" />,
      skills: [
        { name: 'Vue.js' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'Bootstrap' },
        { name: 'Tailwind CSS' },
        { name: 'jQuery' }
      ]
    },
    Databases: {
      icon: <Database className="category-icon" />,
      skills: [
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
        { name: 'Redis' },
        { name: 'Elasticsearch' }
      ]
    },
    'Cloud & DevOps': {
      icon: <Cloud className="category-icon" />,
      skills: [
        { name: 'AWS' },
        { name: 'GCP' },
        { name: 'Azure' },
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Terraform' },
        { name: 'GitHub Actions' }
      ]
    },
    'Messaging & Real-time': {
      icon: <Zap className="category-icon" />,
      skills: [
        { name: 'Apache Kafka' },
        { name: 'MQTT' },
        { name: 'WebSocket' },
        { name: 'Pusher' }
      ]
    },
    Tools: {
      icon: <Wrench className="category-icon" />,
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'GitLab' },
        { name: 'Bitbucket' },
        { name: 'Slack' },
        { name: 'JIRA' },
        { name: 'Trello' },
        { name: 'SonarQube' },
        { name: 'VS Code' }
      ]
    },
    'Operating Systems': {
      icon: <Monitor className="category-icon" />,
      skills: [
        { name: 'Windows' },
        { name: 'Ubuntu' },
        { name: 'Mac OS' }
      ]
    },
    'APIs & Frameworks': {
      icon: <Globe className="category-icon" />,
      skills: [
        { name: 'RESTful APIs' },
        { name: 'GraphQL APIs' },
        { name: 'Postman' },
        { name: 'Swagger' },
        { name: 'Google Maps API' },
        { name: 'Amazon SP API' }
      ]
    },
    'Other Expertise': {
      icon: <Star className="category-icon" />,
      skills: [
        { name: 'Push Notifications' },
        { name: 'WebSocket' },
        { name: 'Serverless' },
        { name: 'OAuth2 / SSO' },
        { name: 'JWT Authentication' },
        { name: 'Payment Integration' },
        { name: 'IoT Solutions' },
        { name: 'Prometheus' },
        { name: 'Grafana' },
        { name: 'CloudWatch' },
        { name: 'Agile / Scrum' },
        { name: 'Leadership & Team Management' }
      ]
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-subtitle">
            Technologies and tools I work with to build robust applications
          </p>
        </div>

        <div className="skills-stack">
          {Object.entries(skillsData).map(([category, data]) => (
            <div className="skill-category" key={category}>
              <div className="category-header">
                <span className="category-icon">{data.icon}</span>
                <h3 className="category-title">{category}</h3>
              </div>
              <div className="skills-list">
                {data.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-name">{skill.name}</span>
                  </div>
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
