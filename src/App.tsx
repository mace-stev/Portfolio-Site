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
            <strong>$49 Website Audit — Delivered within 48 hours.</strong> Email:{' '}
            <a href="mailto:masonwp.help@gmail.com">masonwp.help@gmail.com</a>
          </p>

          {/* CTA buttons */}
          <div style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="mailto:masonwp.help@gmail.com?subject=Website%20Audit%20Request"
              style={{
                background: '#4fb2d6',
                color: '#000',
                padding: '8px 12px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
              }}
            >
              Request $49 Audit
            </a>

            <button
              type="button"
              onClick={async () => {
                const email = 'masonwp.help@gmail.com';
                try {
                  await navigator.clipboard.writeText(email);
                  alert('Copied: ' + email);
                } catch {
                  const input = document.createElement('input');
                  input.value = email;
                  document.body.appendChild(input);
                  input.select();
                  document.execCommand('copy');
                  document.body.removeChild(input);
                  alert('Copied: ' + email);
                }
              }}
              style={{
                border: '1px solid #4fb2d6',
                background: 'transparent',
                color: '#4fb2d6',
                padding: '8px 12px',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Copy email
            </button>

            <a
              href="#services"
              style={{
                border: '1px solid #4fb2d6',
                color: '#4fb2d6',
                padding: '8px 12px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
              }}
            >
              See Services
            </a>
          </div>

          <p style={{ marginTop: '8px' }}>
            Or email directly: <strong>masonwp.help@gmail.com</strong>
          </p>
          {/* Quick request (no email client needed) */}
          {/* Quick request form (Formspree) */}
          <div style={{ marginTop: '16px', maxWidth: '520px' }}>
            <h3 style={{ marginBottom: '8px' }}>Quick request</h3>

            <form
              id="audit-form"
              action="https://formspree.io/f/xojnzqdj"
              method="POST"
            >
             

              <label style={{ display: 'block', marginBottom: '6px' }}>
                Your Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@business.com"
                  style={{
                    width: '100%',
                    marginTop: '6px',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #333',
                    background: '#111',
                    color: '#fff',
                  }}
                />
              </label>

              <label style={{ display: 'block', marginBottom: '6px' }}>
                Website URL
                <input
                  type="text"
                  name="website"
                  placeholder="https://yourwebsite.com"
                  style={{
                    width: '100%',
                    marginTop: '6px',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #333',
                    background: '#111',
                    color: '#fff',
                  }}
                />
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
                What should I prioritize?
                <textarea
                  name="notes"
                  placeholder="Bookings, leads, speed, broken buttons, mobile issues, etc."
                  rows={4}
                  style={{
                    width: '100%',
                    marginTop: '6px',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #333',
                    background: '#111',
                    color: '#fff',
                  }}
                />
              </label>

              <button
                type="submit"
                style={{
                  background: '#4fb2d6',
                  color: '#000',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                Request $49 Audit
              </button>
            </form>

            <p style={{ marginTop: '8px', opacity: 0.8 }}>
              I’ll review your site and respond within 24 hours.
            </p>
          </div>
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

            <p style={{ marginTop: '10px' }}>
              <strong>You’ll receive:</strong>
            </p>
            <ul>
              <li>Prioritized issue list (High / Medium / Low)</li>
              <li>Screenshots + steps to reproduce</li>
              <li>Quick fixes + recommendations</li>
            </ul>

            <p style={{ marginTop: '10px' }}>
              <a href="#about">
                Email me to start
              </a>
            </p>
          </div>

          <div className="project">
            <h3>Playwright Automation Setup</h3>
            <ul>
              <li>End-to-end test coverage for key user flows</li>
              <li>Reliable locators and assertions</li>
              <li>HTML reports and failure screenshots</li>
              <li>Optional CI setup (GitHub Actions)</li>
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

          <div className="project">
            <h3>How it works</h3>
            <ol>
              <li>You send your website URL + what matters (sales, leads, bookings, etc.)</li>
              <li>I test your site and document issues + fixes</li>
              <li>You get a report you can use immediately (or I can help implement fixes)</li>
            </ol>
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
            <p style={{ marginTop: '6px' }}>
              <strong>Tools:</strong> Playwright + HTML reports + CI artifacts (screenshots/traces)
            </p>

            <img
              className="readme_img"
              src="./StackFile_Tests.png"
              alt="Playwright report showing passing tests"
            />
            <div className="project_atags">
              <a
                href="https://github.com/mace-stev/StackFile"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* FLOWPILOT */}
          <div className="project">
            <h3>FlowPilot – WordPress SaaS Theme</h3>
            <p>
              A modern, mobile-first SaaS landing page theme for WordPress.
              Designed for fast setup, clear CTA sections, and clean “product-style” layouts.
            </p>

            <img
              className="readme_img"
              src="./flowpilot.png"
              alt="FlowPilot WordPress SaaS theme preview"
            />

            <div className="project_atags" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href="#about"
                style={{ textDecoration: 'none' }}

              >
                Request Setup |
              </a>


              {/* Replace this link with your real FlowPilot demo when ready */}
              <a
                href="https://flowpilotdemo.com/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                | View Theme
              </a>
            </div>
          </div>

          {/* OTHER PROJECTS */}
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

          {/* FAQ */}
          <div className="project">
            <h3>FAQ</h3>
            <p><strong>Do you need admin access?</strong> Not for the $49 audit. I can audit publicly accessible pages from a URL.</p>
            <p><strong>What types of sites do you test?</strong> Small business websites, landing pages, web apps, and WordPress sites.</p>
            <p><strong>Can you fix issues too?</strong> Yes. If you want implementation help, I can quote based on scope.</p>
            <p><strong>How fast is delivery?</strong> Typically within 48 hours for the audit.</p>
          </div>
        </section>

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
        <a href="mailto:masonwp.help@gmail.com">masonwp.help@gmail.com</a>
      </footer>
    </div>
  )
}