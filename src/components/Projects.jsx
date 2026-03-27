import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import './Projects.css'

// Import images
import betterCommsImage from '../assets/betterComms.png'
import blueColdImage from '../assets/blueCold.png'



const Projects = () => {
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (projectTitle) => {
    setImageErrors(prev => ({
      ...prev,
      [projectTitle]: true
    }))
  }

  const renderFallbackImage = (projectTitle) => (
    <div className="project-image-fallback">
      <div className="fallback-bg-pattern">
        <div className="pattern-circle circle-1"></div>
        <div className="pattern-circle circle-2"></div>
        <div className="pattern-circle circle-3"></div>
        <div className="pattern-line line-1"></div>
        <div className="pattern-line line-2"></div>
      </div>
      <div className="fallback-content">
        <div className="fallback-icon-container">
          <div className="icon-glow"></div>
          <svg className="fallback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21,15 16,10 5,21" />
          </svg>
        </div>
        <div className="fallback-text">
          <div className="text-primary">{projectTitle}</div>
          <div className="text-secondary">Project Preview</div>
        </div>
        <div className="loading-dots">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
        </div>
      </div>
    </div>
  )

  const projectsData = [
    {
      title: 'BetterComms',
      description:
        'The purpose of developing this platform is to provide BetterComms admin and staff users with a streamlined solution to efficiently manage and operate their telecom business. This SaaS-based platform, originally created for internal use by BetterComms, is also intended to be sold to other businesses operating under the same telecom business model.\nLead Import: Admins can import leads into the platform either manually or from the CreditSafe platform.\nLead Assignment: Admins can assign leads to telemarketers.\nTelemarketing: Telemarketers call the customers, and after the call, they submit the call details.\nSales Follow-Up: If the customer is interested, another team follows up with a call to schedule a sales appointment.\nQuotation and Sales: The team generates a quotation for the products and services. This quotation can be shared via DocuSign, where the customer can review and sign the document.\nInstallation: Once the contract is signed, an installation appointment is scheduled, and the installation is provided to the customer.\nCustomer Support: During the contract period, if the customer requires any support, the team provides the necessary assistance.\nCommission Structure: Telemarketers, salespersons, and installation engineers earn commissions based on the successful completion of their assigned work.',
      image: betterCommsImage,
      technologies: [
        'Node.js(ExpressJS)',
        'TypeScript',
        'MySQL(TypeORM)',
        'Redis',
        'AWS(S3, SQS)',
        'Docker',
        'GitHub Actions',
        'Datadog'
      ],
      features: [
        'Lead Management',
        'Telemarketing Workflow',
        'Sales Follow-Up & Appointment Scheduling',
        'Quotation & Contract Management',
        'Installation Management',
        'Customer Support Ticketing',
        'Commission Automation'
      ],
      links: {
        live: "https://www.multi-task.co.uk/",
        github: ""
      },
      status: "Live"
    },
    {
      title: 'BlueCold',
      description:
        'Blue cold is a mobile application which visualizes and controls the temperature and pressure of a cold room  with the help of connected hardware. Application controls Machine\'s pressure and temperature. The app has set points to manage temperature sensors & pressure sensors of the device, which sends alert and notification to the user if the temperature and pressure goes beyond the set points.\nUsers can manage various devices and monitor their performance. They also have the option to add temperature and pressure details, set minimum and maximum range limits, and receive notifications if the values exceed these limits.\nThe device continuously sends data to the server, and the server communicates with the device using MQTT.\nBulk data from the device is stored in Elasticsearch. The data in Elasticsearch is processed to extract useful information, which is then stored in MySQL.\nDevice performance reports and graphs are displayed in the application, allowing users to easily understand the device\'s performance.',
      image: blueColdImage,
      technologies: [
        'Node.js(ExpressJS)',
        'TypeScript',
        'MySQL(Sequelize)',
        'Elasticsearch',
        'MQTT',
        'Kafka',
        'AWS S3',
        'Docker'
      ],
      features: [
        'Real-Time Temperature & Pressure Monitoring',
        'Device Control & Management',
        'Threshold-Based Alerts & Notifications',
        'MQTT-Based Device Communication',
        'High-Volume Data Ingestion',
        'Data Processing Pipeline',
        'Performance Reports & Graphs',
      ],
      links: {
        live: "https://admin.sensxact.com/auth/login",
        github: ""
      },
      status: "Live"
    }
    // {
    //   title: 'Spider AI',
    //   description:
    //     'Restaurant management backend: onboarding, menus, staff, inventory, and order workflows with state transitions. AI receipt pipeline using Anthropic Claude to extract structured data from images, fuzzy matching to products, and RBAC for multi-tenant admin APIs.',
    //   image: projectPlaceholder,
    //   technologies: [
    //     'NestJS',
    //     'MongoDB',
    //     'TypeORM',
    //     'Anthropic Claude',
    //     'REST API',
    //     'RBAC'
    //   ],
    //   features: [
    //     'End-to-end order lifecycle (waiting → cooking → ready / rejected)',
    //     'LLM-powered receipt OCR and product matching',
    //     'Multi-branch REST and admin controls'
    //   ],
    //   links: {},
    //   status: 'Case study'
    // },
    // {
    //   title: 'Flex-Arabia',
    //   description:
    //     'Location-based marketplace for gym trainers: B2B partner flows, booking lifecycle, geo search with MySQL bounding-box queries, Redis timers for acceptance windows and penalties, and real-time chat with Socket.IO. Weekly diet plans generated via LLM from user profile.',
    //   image: projectPlaceholder,
    //   technologies: [
    //     'NestJS',
    //     'MySQL',
    //     'TypeORM',
    //     'Redis',
    //     'Socket.IO',
    //     'REST API',
    //     'LLM'
    //   ],
    //   features: [
    //     'Geo discovery and booking rules with Redis-backed timers',
    //     '1:1 user–trainer chat over WebSockets',
    //     'Personalized AI diet plans per goals and constraints'
    //   ],
    //   links: {},
    //   status: 'Case study'
    // },
    // {
    //   title: 'Easycarbs',
    //   description:
    //     'Healthcare and nutrition platform: Laravel 12 REST APIs with Vue 3 + Inertia, Sanctum auth, CASL RBAC, Stripe subscriptions and webhooks, Apple receipt checks, Firebase and Twilio notifications, Pusher realtime, and AWS S3 storage with Docker and Supervisor queues.',
    //   image: projectPlaceholder,
    //   technologies: [
    //     'Laravel 12',
    //     'Vue 3',
    //     'Inertia.js',
    //     'Sanctum',
    //     'Stripe',
    //     'Pusher',
    //     'Firebase FCM',
    //     'Twilio',
    //     'AWS S3',
    //     'Docker'
    //   ],
    //   features: [
    //     'Vitals tracking APIs with alerts and history',
    //     'Multi-channel notifications and admin CMS with CSV imports',
    //     'Gamification and subscription billing flows'
    //   ],
    //   links: {},
    //   status: 'Case study'
    // }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A showcase of production-grade systems I&apos;ve engineered—stacks and outcomes at a high level
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                {imageErrors[project.title] ? (
                  renderFallbackImage(project.title)
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    onError={() => handleImageError(project.title)}
                  />
                )}
                {(project.links?.live || project.links?.github) && (
                  <div className="project-action-buttons">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn live-btn"
                        title="Live Demo"
                      >
                        <ExternalLink className="btn-icon" />
                      </a>
                    )}
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn github-btn"
                        title="Source Code"
                      >
                        <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-status">{project.status}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-details">
                  <div className="project-features">
                    <h4 className="details-title">Key Features</h4>
                    <ul className="features-list">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-technologies">
                  <h4 className="details-title">Technologies</h4>
                  <div className="tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
