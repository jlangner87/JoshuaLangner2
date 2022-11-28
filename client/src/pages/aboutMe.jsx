import { NavLink } from 'react-router-dom'
import header from '../elements/me_header.png'
import family from '../elements/family_transparent.png'
import home from '../elements/home_icon.png'

function AboutMe() {
  return (
    <div className="page">
            <NavLink to='/'> <img src={home} alt="home icon" className='icon'/> </NavLink>
      <img src={header} alt="headshot and title Joshua Langner Software engineer" className='header_logo' />
      <div className='page_content'>
        <h1 className='page_content_header'>About Me</h1>
        <h2 className='page_content_subheader'>An Overview</h2>
        <p className='page_content_body'>I am a software engineer with a background in technical support, sales, and leadership in the electronics and cellular industry.
          <br/>
          I have a driving passion for solving complex problems by creating beautiful, accessible, responsive applications. 
          <br/>
          I thrive in diverse collaborative cultures where continuous improvement, creativity, and curiosity are a driving force.</p>
        <h1 className='page_content_subheader'>A Personal Note</h1>
        <p className='page_content_body'>Aside from a developer, I am a husband and father living in rural Iowa. My passion hobby is theater. I am a playwright, director, and actor. It is fun, but I have gained so many transferrable skills in teater. I have learned how to effectively work with a diverse group to deliver the best possible product. I have learned the importance of giving my best to my areas of contribution. I have learned the process of taking an abstract concept and transforming it into a tangible product for the audience to enjoy.</p>
        <img src={family} alt="family photo of Joshua, his wife, their son and two daughters" className='family_photo'/>
      </div>
      <div className='page_content'>
        <h1 className='page_content_header'>Skills</h1>
        <div className='skills_container'>
          <div className='skill_list'>
            <h2 className='page_content_subheader'>Languages</h2>
            <p className='skill'>JavaScript</p>
            <p className='skill'>TypeScript</p>
            <p className='skill'>Python</p>
            <p className='skill'>HTML/HTML5</p>
            <p className='skill'>Custom CSS</p>
          </div>
          <div className='skill_list'>
            <h2 className='page_content_subheader'>Frontend</h2>
            <p className='skill'>React.Js</p>
            <p className='skill'>Vue.Js</p>
            <p className='skill'>Responsive Design</p>
            <p className='skill'>Accessible Design</p>
            <p className='skill'>Bootstrap</p>
          </div>
          <div className='skill_list'>
            <h2 className='page_content_subheader'>Backend</h2>
            <p className='skill'>PostgresQL</p>
            <p className='skill'>MongoDB</p>
            <p className='skill'>Django</p>
            <p className='skill'>Express.Js</p>
            <p className='skill'>Node.Js</p>
            <p className='skill'>REST API</p>
            <p className='skill'>JWT Authentication</p>
          </div>
          <div className='skill_list'>
            <h2 className='page_content_subheader'>Creative Skills</h2>
            <p className='skill'>Design &#40;Canva&#41;</p>
            <p className='skill'>Design &#40;Gimp&#41;</p>
            <p className='skill'>Video &#40;Final Cut Pro&#41;</p>
            <p className='skill'>Video &#40;Adobe Premiere Pro&#41;</p>
            <p className='skill'>OS Troubleshooting</p>
          </div>
          <div className='skill_list'>
            <h2 className='page_content_subheader'>Personal Skills</h2>
            <p className='skill'>Team Leadership</p>
            <p className='skill'>Creative Problem Solving</p>
            <p className='skill'>Cross-Functional Collaboration</p>
            <p className='skill'>Navigating Change</p>
            <p className='skill'>Listening with Empathy</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe