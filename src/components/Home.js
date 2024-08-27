import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  FaHome, FaUser, FaMapSigns, FaEnvelope, FaPlayCircle,
  FaGithub, FaLinkedin, FaTwitter, FaCode, FaGamepad, FaLightbulb, FaCertificate
} from 'react-icons/fa';
import { GiConsoleController, GiRetroController } from 'react-icons/gi';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePhoto from '../assets/profile.jpg';
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import cert1 from '../assets/53718a16-2084-4e45-a485-ecd0b366ffe6_fighting_game_in_unity_certificate.png';
import cert2 from '../assets/python__beyond_intermediate.png';
import cert3 from '../assets/python_from_zero_to_hero.png';
import cert4 from '../assets/unity.png';
import cert5 from '../assets/certifica1.png';
import cert6 from '../assets/certificat2.png';
import cert7 from '../assets/certificat3.png';

AOS.init();

function Home() {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (index) => {
    setOpenPanel(openPanel === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again later.");
      });

    e.target.reset();
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-wrapper">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <button className="nav-button" title="Home" onClick={() => scrollToSection('hero-section')}>
          <FaHome />
        </button>
        <button className="nav-button" title="About Me" onClick={() => scrollToSection('profile-section')}>
          <FaUser />
        </button>
        <button className="nav-button" title="Skills" onClick={() => scrollToSection('skills-section')}>
          <FaCode />
        </button>
        <button className="nav-button" title="Projects" onClick={() => scrollToSection('projects-section')}>
          <FaPlayCircle />
        </button>
        <button className="nav-button" title="Certifications & Courses" onClick={() => scrollToSection('certifications-section')}>
          <FaCertificate />
        </button>
        <button className="nav-button" title="Contact" onClick={() => scrollToSection('contact-section')}>
          <FaEnvelope />
        </button>
      </div>

      {/* Main Content */}
      <div className="home-container">
        {/* Hero Section */}
        <div id="hero-section" className="hero-section" data-aos="fade-up">
          <h1 className="hero-title">Hello, I'm Mocanu Bogdan</h1>
          <p className="hero-subtitle typing-effect">
            A passionate game developer focused on creating immersive experiences. I specialize in game design, programming, and the full cycle of game development.
          </p>
        </div>

        {/* Profile Section */}
        <div id="profile-section" className="profile-container" data-aos="fade-up">
          <img src={profilePhoto} alt="Profile" className="profile-pic hover-zoom" />
          <div className="profile-details">
            <h2>About Me</h2>
            <p>
              I began my journey in game development in 2021 with my first 3D project, Driving Escape. Since then, I've developed multiple smaller projects, which allowed me to refine my skills in both programming and game design. My recent project, Chrono Escape, is a testament to my growth in the industry, showcasing my ability to blend narrative storytelling with complex gameplay mechanics.
            </p>
            <p>
              I also have experience in game testing and bug analysis, which has further honed my ability to deliver polished and engaging gaming experiences. I’m particularly interested in creating immersive worlds where players can lose themselves and face challenges that test their skills and creativity.
            </p>
            <div className="social-links">
              <a href="https://github.com/MoboCon" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/bogdan-mocanu-215000267/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/mocanubogdan" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section id="skills-section" className="skills" data-aos="fade-up">
          <h2 className="section-title"><FaCode /> My Skills</h2>
          <div className="skills-container">
            <div className="skill-item" data-aos="fade-right">
              <FaGamepad className="skill-icon" />
              <h3>Game Development</h3>
              <p>Proficient in Unity 3D and Unreal Engine, with a strong foundation in game mechanics, AI programming, and level design.</p>
              <ul>
                <li>Unity 3D and Unreal Engine proficiency</li>
                <li>Advanced AI programming and behavior design</li>
                <li>Level design with a focus on player experience</li>
                <li>Integration of immersive gameplay mechanics</li>
              </ul>
            </div>
            <div className="skill-item" data-aos="fade-left">
              <FaCode className="skill-icon" />
              <h3>Programming</h3>
              <p>Experienced in C#, C++, and Python, focusing on developing robust and scalable code for games and applications.</p>
              <ul>
                <li>Proficient in C#, C++, and Python</li>
                <li>Design patterns for scalable game architecture</li>
                <li>Optimization techniques for performance improvements</li>
                <li>Experience with multi-threading and real-time systems</li>
              </ul>
            </div>
            <div className="skill-item" data-aos="fade-right">
              <FaLightbulb className="skill-icon" />
              <h3>Creative Design</h3>
              <p>Skilled in 3D modeling, animation, and graphic design using Blender, Photoshop, and After Effects.</p>
              <ul>
                <li>3D modeling and animation in Blender</li>
                <li>Advanced texturing and UV mapping techniques</li>
                <li>Graphic design and UI/UX principles</li>
                <li>Visual effects and motion graphics in After Effects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects-section" className="projects" data-aos="fade-up">
          <div className="projects-content">
            <h2 className="section-title"><FaPlayCircle /> My Projects</h2>

            <div className="projects-carousel-container">
              <Carousel className="carousel-box">
                <Carousel.Item>
                  <img className="d-block carousel-img hover-rotate" src={photo1} alt="Project 1" />
                  <Carousel.Caption>
                    <h3>Driving Escape</h3>
                    <p>A thrilling car-chase game where players evade police cars and collect coins to unlock new levels.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block carousel-img hover-rotate" src={photo2} alt="Project 2" />
                  <Carousel.Caption>
                    <h3>Chrono Escape</h3>
                    <p>An adventure game where players navigate through different time periods, facing unique challenges in each era.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            <div className="projects-details">
              <div className="project-detail" onClick={() => togglePanel(1)}>
                <h4><GiConsoleController /> Chrono Escape</h4>
                <div className={`project-panel ${openPanel === 1 ? 'open' : ''}`}>
                  <p><strong>Description:</strong> Chrono Escape is a narrative-driven game where players take on the role of a time traveler navigating through different historical periods. Each period presents unique enemies characteristic of the time, and the goal is to evade these enemies and reach the next era.</p>
                  <p><strong>Technical Details:</strong></p>
                  <ul>
                    <li>Developed using Unity 3D, focusing on narrative-driven gameplay.</li>
                    <li>Implemented time-based transitions with historical accuracy.</li>
                    <li>Created unique AI behaviors for each time period.</li>
                    <li>Designed puzzles and obstacles requiring time-based strategies.</li>
                    <li>Incorporated dynamic lighting and weather systems to enhance immersion.</li>
                    <li>Implemented a save system allowing players to return to previous eras.</li>
                    <li>Integrated with Git for version control, ensuring smooth collaboration.</li>
                  </ul>
                  <a href="https://github.com/MoboCon/driving-escape" target="_blank" rel="noopener noreferrer" className="project-link">
                    <button className="project-button hover-glow">
                      <FaGithub /> View on GitHub
                    </button>
                  </a>
                </div>
              </div>

              <div className="project-detail" onClick={() => togglePanel(2)}>
                <h4><GiRetroController /> Driving Escape</h4>
                <div className={`project-panel ${openPanel === 2 ? 'open' : ''}`}>
                  <p><strong>Description:</strong> Driving Escape is a fast-paced car-chase game developed in Unity 3D. The game features AI-driven police cars that pursue the player with increasing difficulty. Players collect coins to unlock new vehicles and levels.</p>
                  <p><strong>Technical Details:</strong></p>
                  <ul>
                    <li>Developed using Unity 3D with C# scripting.</li>
                    <li>Implemented AI behavior for dynamic police car pursuit.</li>
                    <li>Designed multiple levels with increasing difficulty and unique obstacles.</li>
                    <li>Integrated a currency system for unlocking new vehicles and levels.</li>
                    <li>Implemented an upgrade system for vehicle enhancements.</li>
                    <li>Used Git for version control, managing collaborative development.</li>
                    <li>Optimized for mobile and desktop platforms, ensuring a seamless experience.</li>
                  </ul>
                  <a href="https://github.com/MoboCon/Unity-3D--On-The-Run--game" target="_blank" rel="noopener noreferrer" className="project-link">
                    <button className="project-button hover-glow">
                      <FaGithub /> View on GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="projects-video">
              <h3><FaPlayCircle /> Watch My Project Demo</h3>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/JYHzynDyVgU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-frame hover-zoom"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Certifications & Courses Section */}
        <section id="certifications-section" className="certifications" data-aos="fade-up">
          <h2 className="section-title"><FaCertificate /> Certifications & Courses</h2>
          <Slider {...sliderSettings} className="certifications-slider">
            <div>
              <img src={cert4} alt="Certificate 4" className="cert-img small-cert" />
            </div>
            <div>
              <img src={cert1} alt="Certificate 1" className="cert-img small-cert" />
            </div>
            <div>
              <img src={cert2} alt="Certificate 2" className="cert-img small-cert" />
            </div>
            <div>
              <img src={cert3} alt="Certificate 3" className="cert-img small-cert" />
            </div>
            <div>
              <img src={cert5} alt="Certificate 5" className="cert-img small-cert" />
            </div>
            <div>
              <img src={cert6} alt="Certificate 6" className="cert-img small-cert" />
            </div>
            <div>
              <img src={cert7} alt="Certificate 7" className="cert-img small-cert" />
            </div>
          </Slider>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="contact" data-aos="fade-up">
          <div className="contact-content">
            <h2 className="section-title">Get in Touch</h2>
            <p>If you’d like to discuss a project or just want to say hello, feel free to reach out!</p>
            
            <form className="contact-form" onSubmit={sendEmail}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <button type="submit" className="cta-button hover-pulse">Send Message</button>
            </form>

            <div className="contact-info">
              <p><FaEnvelope /> mocanubogdan199923@gmail.com</p>
              <p><FaLinkedin /> <a href="https://www.linkedin.com/in/bogdan-mocanu-215000267/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a></p>
              <p><FaTwitter /> <a href="https://twitter.com/mocanubogdan" target="_blank" rel="noopener noreferrer">Follow me on Twitter</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
