import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useEffect } from 'react'
import SlideShow from '../components/slides'
import Contact from '../components/contact'
import header from '../elements/me_header.png'
import family from '../elements/family_transparent.png'
import home from '../elements/home_icon.png'
import toTop from '../elements/totop.png'
import javascript from '../elements/javascript.png'
import reactLogo from '../elements/react.png'
import mongodb from '../elements/mongo.png'
import psql from '../elements/postgresql.png'
import node from '../elements/node.png'
import python from "../elements/python.png"
import typescript from '../elements/typescript.png'
import vue from '../elements/vue.png'
import html from '../elements/html.png'
import css from '../elements/css.png'
import resume from '../elements/resume.png'
import resumePDF from '../elements/Jlangner_resume.pdf'

function AboutMe() {
  return (
    <div className="page">
            <NavLink to='/'> <img src={home} alt="navigate home" className='icon' id='#top'/> </NavLink>
      <img src={header} alt="headshot and title Joshua Langner Software engineer" className='header_logo'/>
      <div className='page_content'>
        <h1 className='page_content_header'>&#60; About Me &#47;&#62;</h1>
        <h2 className='page_content_subheader'>An Overview</h2>
        <p className='page_content_body'>I am a software engineer with a background in technical support, sales, and leadership in the electronics and cellular industry.</p>
          <br/>
          <p className='page_content_body'>I have a driving passion for solving complex problems by creating beautiful, accessible, responsive applications. </p>
          <br/>
          <p className='page_content_body'> I am seeking a software engineering role in a company with a diverse collaborative culture where continuous improvement, creativity, and curiosity are a driving force.</p>
        <h2 className='page_content_subheader'>A Personal Note</h2>
        <p className='page_content_body'>Aside from a developer, I am a husband and father living in rural Iowa. My passion hobby is theater. I am a playwright, director, and actor. It is a fun thing to do, but more than that— I have gained so many transferrable skills from this passion. I have learned how to effectively work with a diverse group to deliver the best possible product. I have learned the importance of giving my best to my areas of contribution. I have learned the process of taking an abstract concept and transforming it into a tangible product for the audience to enjoy.</p>
        <h3 className='page_content_subheader'>resume</h3>
        <p className='page_content_body'>Feel free to download a copy of my resume here. <br/>
          <div className="btn btn-primary tooltip"><a href={resumePDF} download><img className='icon2' src={resume} alt="download resume" /></a>
            <div className="top">
              <h3>Download Resume</h3>
              <p>Created: 12/01/2022</p>
              <i></i>
            </div>
          </div>
        </p>    
        <img src={family} alt="family photo: Joshua, his wife, their son and two daughters" className='family_photo'/>
      </div>
      <div className='page_content'>
        <HashLink smooth to='#top'> <img src={toTop} alt="navigate to top" className='icon'/></HashLink>
        <h1 className='page_content_header'>&#60; Skills &#47;&#62;</h1>
        <div className='skills_container'>
          <div className='skill_list'>
            <h3 className='skill_header'>Languages</h3>
            <p className='skill'>JavaScript</p>
            <p className='skill'>TypeScript</p>
            <p className='skill'>Python</p>
            <p className='skill'>HTML/HTML5</p>
            <p className='skill'>Custom CSS</p>
          </div>
          <div className='skill_list'>
            <h3 className='skill_header'>Frontend</h3>
            <p className='skill'>React.Js</p>
            <p className='skill'>Vue.Js</p>
            <p className='skill'>Responsive Design</p>
            <p className='skill'>Accessible Design</p>
            <p className='skill'>Bootstrap</p>
          </div>
          <div className='skill_list'>
            <h3 className='skill_header'>Backend</h3>
            <p className='skill'>PostgresQL</p>
            <p className='skill'>MongoDB</p>
            <p className='skill'>Django</p>
            <p className='skill'>Express.Js</p>
            <p className='skill'>Node.Js</p>
            <p className='skill'>REST API</p>
            <p className='skill'>JWT Authentication</p>
          </div>
          <div className='skill_list'>
            <h3 className='skill_header'>Creative Skills</h3>
            <p className='skill'>Design &#40;Canva&#41;</p>
            <p className='skill'>Design &#40;Gimp&#41;</p>
            <p className='skill'>Video &#40;Final Cut Pro&#41;</p>
            <p className='skill'>Video &#40;Adobe Premiere Pro&#41;</p>
            <p className='skill'>OS Troubleshooting</p>
            <p className='skill'>Electronics Repair</p>
          </div>
          <div className='skill_list'>
            <h3 className='skill_header'>Personal Skills</h3>
            <p className='skill'>Team Leadership</p>
            <p className='skill'>Creative Problem Solving</p>
            <p className='skill'>Cross-Functional Collaboration</p>
            <p className='skill'>Navigating Change</p>
            <p className='skill'>Listening with Empathy</p>
          </div>
        </div>
        <h3 className='continuing_ed_header'>Current Continuing Education</h3>
        <div className='continuing_ed_container'>
        <div className='continuing_ed'>
        <p className='continuing_ed_subject'>Data Science Foundations</p>
        <p className='continuing_ed_attribute'>Online Course</p>
        <p className='continuing_ed_attribute'>Codecademy</p>
        </div>
        <div className='continuing_ed'>
        <p className='continuing_ed_subject'>The Design of Everyday Things</p>
        <p className='continuing_ed_attribute'>Reading Material</p>
        <p className='continuing_ed_attribute'>By: Don Norman</p>
        </div>
        <div className='continuing_ed'>
        <p className='continuing_ed_subject'>Color Theory and Design</p>
        <p className='continuing_ed_attribute'>Online Course</p>
        <p className='continuing_ed_attribute'>Codecademy</p>
        </div>
        </div>
        <div className='skills_container'>
          <img className='small_logo' src={html} alt="h.t.m.l. 5" />
          <img className='small_logo' src={css} alt="c.s.s. 3" />
          <img className='small_logo' src={javascript} alt="javascript" />
          <img className='small_logo' src={typescript} alt="typescript" />
          <img className='small_logo' src={python} alt="python" />
          <img className='small_logo' src={reactLogo} alt="react" />
          <img className='small_logo' src={vue} alt="vue" />
          <img className='small_logo' src={mongodb} alt="mongo d.b." />
          <img className='small_logo' src={psql} alt="postgres s.q.l." />
          <img className='small_logo' src={node} alt="node j.s." />
        </div>
        </div>
      <div className='page_content'>
        <HashLink smooth to='#top'> <img src={toTop} alt="navigate to top" className='icon'/></HashLink>
        <h1 className='page_content_header'>&#60; Project Portfolio &#47;&#62;</h1>
        <SlideShow/>
        <p className='space'>.</p>
      </div>
      <div className='page_content'>
      <HashLink smooth to='#top'> <img src={toTop} alt="navigate to top" className='icon'/> </HashLink>
        <h1 className='page_content_header'>&#60; Connect with Me &#47;&#62;</h1>
      <Contact/>
      </div>
    </div>
  )
}

export default AboutMe