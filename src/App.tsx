export default function App() {
  return (
    <div>
      <header>
        <nav>
          <h1 style={{ color: '#4fb2d6', fontWeight: 'bold' }}>
            Mason Stevenson
          </h1>
          <div className="links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Work</a>
            <a href="#education">Education</a>
            <a href="#certifications">Certifications</a>
            <a href="#awards">Awards</a>
            <a
              href="/Portfolio-Site/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#4fb2d6',
                color: '#000',
                padding: '4px 8px',
                borderRadius: '4px',
              }}
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* ABOUT */}
        <section id="about">
          <h2>QA Automation & Website Reliability</h2>
          <img src="./profile.jpg" alt="Profile" className="profile-pic" />

          <p>
            I help small businesses and startups prevent bugs, broken features,
            and costly website issues. I provide manual website audits and
            automated end-to-end testing using Playwright to ensure sites work
            correctly across devices and browsers.
          </p>

          <p>
            If a website is outdated or needs a rebuild, I also offer fast
            WordPress setups using my FlowPilot template.
          </p>

          <p>
            <strong>$49 Website Audit available.</strong> Email:{' '}
            <a href="mailto:williamstevenson107@gmail.com">
              williamstevenson107@gmail.com
            </a>
          </p>
        </section>

        {/* SERVICES */}
        <section id="services">
          <h2>Services</h2>

          <div className="project">
            <h3>Website Audit – $49</h3>
            <ul>
              <li>Broken links, buttons, and UI issues</li>
              <li>Mobile responsiveness testing</li>
              <li>Basic cross-browser checks</li>
              <li>Performance and UX notes</li>
              <li>Delivered as a professional report within 48 hours</li>
            </ul>
          </div>

          <div className="project">
            <h3>Playwright Automation Setup</h3>
            <ul>
              <li>End-to-end test coverage for key user flows</li>
              <li>Reliable locators and assertions</li>
              <li>HTML reports and failure screenshots</li>
              <li>Optional CI setup</li>
            </ul>
          </div>

          <div className="project">
            <h3>Website Setup (FlowPilot) – starting at $400</h3>
            <ul>
              <li>Fast mobile-optimized WordPress site</li>
              <li>Contact forms and basic SEO</li>
              <li>Performance-focused setup</li>
              <li>Quick turnaround</li>
            </ul>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2>Skills</h2>

          <p className="skills">
            <strong>QA & Testing:</strong> Playwright, End-to-End Testing, UI
            Testing, Cross-Browser Testing, Bug Reporting, Test Automation
          </p>

          <p className="skills">
            <strong>Web:</strong> React.js, JavaScript, TypeScript, HTML5, CSS3,
            Node.js, Express.js, PostgreSQL, Python, Docker, GitHub
          </p>
        </section>

        {/* WORK */}
        <section id="projects">
          <h2>Work & Technical Experience</h2>

          {/* QA PROOF */}
          <div className="project">
            <h3>Playwright QA Demo</h3>
            <p>
              Automated end-to-end test suite validating UI behavior, element
              visibility, form interaction, and user flows with reporting and
              failure detection.
            </p>
            <img className="readme_img" src="./playwright.png" alt="Playwright QA demo" />
            <div className="project_atags">
              <a href="https://github.com/mace-stev" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          {/* Projects - screenshots + code only */}
          <div className="project">
            <h3>Bizzybee</h3>
            <p>
              Full-stack Yelp clone built with Flask, React, TypeScript, and
              PostgreSQL. (Code + screenshots; live demo available on request.)
            </p>
            <img className="readme_img" src="./bizzybee.png" alt="Bizzybee screenshot" />
            <div className="project_atags">
              <a
                href="https://github.com/mace-stev/bizzybee"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="project">
            <h3>OneMusic</h3>
            <p>
              Playlist transfer app using YouTube and Spotify APIs built with
              React, Express, PostgreSQL, and Docker. (Code + screenshots; live
              demo available on request.)
            </p>
            <img className="readme_img" src="./OneMusic_repo.png" alt="OneMusic screenshot" />
            <div className="project_atags">
              <a
                href="https://github.com/mace-stev/OneMusic"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Keep the rest as-is */}
        <section id="education">
          <h2>Education</h2>
          <ul>
            <li>App Academy – Full-Stack Software Engineering Bootcamp (2024–2025)</li>
            <li>Brainstation – Full-Stack Web Development (2023)</li>
            <li>Codesmith CS Prep (2022)</li>
          </ul>
        </section>

        <section id="certifications">
          <h2>Certifications</h2>
          <p>Certified Scrum Developer (2024)</p>
        </section>

        <section id="awards">
          <h2>Awards</h2>
          <p>
            Lush Industry Project Winner – MVP contest for redesigned POS.{' '}
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7112932465358381056/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Post
            </a>
          </p>
        </section>
      </main>

      <footer>
        © 2025 Mason Stevenson |{' '}
        <a href="https://github.com/mace-stev" target="_blank" rel="noreferrer">
          GitHub
        </a>{' '}
        |{' '}
        <a
          href="https://www.linkedin.com/in/mason-stevenson-software-engineer/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{' '}
        |{' '}
        <a href="mailto:williamstevenson107@gmail.com">
          williamstevenson107@gmail.com
        </a>
      </footer>
    </div>
  )
}
