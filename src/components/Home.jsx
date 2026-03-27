import { useState, useEffect } from 'react'
import { FileText } from 'lucide-react'
import './Home.css'

const ROLES = [
  'Senior Backend Engineer',
  'Node.js / PHP Developer',
  'Cloud-Native & Microservices Specialist',
]

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  // Typewriter effect
  useEffect(() => {
    const currentRoleText = ROLES[currentRole]
    let currentIndex = 0

    // Clear text first
    setDisplayedText('')
    setIsTyping(true)

    const typeInterval = setInterval(() => {
      if (currentIndex <= currentRoleText.length) {
        setDisplayedText(currentRoleText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)

        // Wait before starting next role
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % ROLES.length)
        }, 2000)
      }
    }, 100) // Typing speed

    return () => clearInterval(typeInterval)
  }, [currentRole])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left Content */}
        <div className="home-content">
          <div className="glass-card">
            <div className="greeting">
              <span className="wave">👋</span>
              <span className="greeting-text">Hello, I'm</span>
            </div>
            
            <h1 className="name-title">
              <span className="first-name">Shahnavaz</span>
              <span className="last-name">Patni</span>
            </h1>
            
            <div className="role-container">
              <span className="role-prefix">I'm a &nbsp;</span>
              <span className="dynamic-role">
                {displayedText}
                <span className={`cursor ${isTyping ? 'typing' : 'blinking'}`}>|</span>
              </span>
            </div>
            
            <p className="description">
              Senior Backend Engineer with extensive experience architecting and delivering scalable, high-performance backend systems. Deep specialization in Node.js and PHP, with strong expertise in microservices, secure REST APIs, event-driven architectures, and real-time systems. Experienced in designing and deploying cloud-native workloads with hands-on proficiency in containerization and serverless architectures. Proven technical leader with experience driving agile teams, mentoring developers, and aligning architecture decisions with business goals. Deeply committed to delivering clean, well-documented, and maintainable codebases built to scale.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Production Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">AI / LLM Integrations</span>
              </div>
            </div>
            
            <div className="cta-buttons">
              <button
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              <button
                className="btn-resume"
                onClick={() => window.open('https://drive.google.com/file/d/1vUtOv2z-Y1me0Y8NrwGDAkOmEqXOIUWi/view', '_blank')}
              >
                <FileText size={20} className="resume-icon" />
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
