
export default function App() {
  return (
    <div>
      <header>
        <nav>
          <h1 style={{ color: '#4fb2d6', fontWeight: 'bold' }}>Mason Stevenson</h1>
          <div className="links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#certifications">Certifications</a>
            <a href="#awards">Awards</a>
            <a href="/Portfolio-Site/resume.pdf" target="_blank" style={{ background: '#4fb2d6', color: '#000', padding: '4px 8px', borderRadius: '4px' }}>Resume</a>
          </div>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <img src="./profile.jpg" alt="Profile" className="profile-pic" />
          <p>I’m a passionate full-stack developer with hands-on experience in building scalable applications using React, Redux, TypeScript, Node.js, PostgreSQL, and Docker. With a background in leadership and customer service, I bring strong communication and problem-solving skills into tech.</p>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <p className="skills">React.js, Redux, JavaScript, TypeScript, HTML5, CSS3, Node.js, Express.js, SQL, PostgreSQL, Python, Docker, Heroku, GitHub, Flask, SQLite3</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Bizzybee</h3>
            <p>A Yelp clone using Flask/Python backend and React/Redux/TypeScript frontend. Built a PostgreSQL database and deployed via Docker to Render.</p>
            <div className="project_atags"><a href="https://bizzybee-ugmu.onrender.com/">Live Site |</a><a href="https://github.com/lukeb06/bizzybee">| GitHub</a></div>
          </div>
          <div className="project">
            <h3>OneMusic</h3>
            <p>App that allows users to transfer music playlists between platforms using YouTube and Spotify APIs. Built with React, Redux, TypeScript, Express, PostgreSQL, and Docker.</p>
            <img className="readme_img" src="./OneMusic_repo.png"/>
           <div className="project_atags"><a href="https://onemusic-qmq9.onrender.com/">Live Site |</a> <a href="https://github.com/mace-stev/OneMusic">| GitHub</a></div>
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
          <p>Lush Industry Project Winner – Won MVP contest for redefined POS in collaboration with engineers, designers, and analysts. <a href="https://www.linkedin.com/feed/update/urn:li:activity:7112932465358381056/">LinkedIn Post</a></p>
        </section>
      </main>
      <footer>
        © 2025 Mason Stevenson |
        <a href="https://github.com/mace-stev">GitHub</a> |
        <a href="https://www.linkedin.com/in/mason-stevenson-software-engineer/">LinkedIn</a> |
        <a href="mailto:williamstevenson107@gmail.com">williamstevenson107@gmail.com</a>
      </footer>
    </div>
  )
}
