import { NavLink } from 'react-router-dom'
import home from '../elements/home_icon.png'
import header from '../elements/business_header.png'
import Contact from '../components/contact'

function BusinessSites() {
  return (
    <div className="page">
      <NavLink to='/'> <img src={home} alt="home icon" className='icon'/> </NavLink>
      <img src={header} alt="business website development service" className='header_logo' id='#top'/>
      <div className='page_content'>
        <h1 className='page_content_header'>&#60; Elevate your Exposure &#47;&#62;</h1>
        <h2 className='page_content_subheader'>Some Kind of Heading</h2>
        <p className='services_content_body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Elementum pulvinar etiam non quam. Lectus nulla at volutpat diam ut venenatis tellus in metus. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Vitae congue mauris rhoncus aenean vel elit scelerisque. Enim sed faucibus turpis in. Velit dignissim sodales ut eu sem. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Dui sapien eget mi proin sed libero. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Morbi leo urna molestie at. Ante in nibh mauris cursus mattis molestie a iaculis.

Enim eu turpis egestas pretium aenean pharetra magna. Lacus laoreet non curabitur gravida. Vitae congue mauris rhoncus aenean vel elit scelerisque. Vel risus commodo viverra maecenas accumsan lacus vel. Pharetra vel turpis nunc eget lorem. Enim lobortis scelerisque fermentum dui faucibus. Nunc sed blandit libero volutpat sed cras. Nisl vel pretium lectus quam id. Adipiscing enim eu turpis egestas pretium aenean pharetra. Amet venenatis urna cursus eget nunc. Eleifend mi in nulla posuere sollicitudin aliquam. A scelerisque purus semper eget. Urna porttitor rhoncus dolor purus. Eget aliquet nibh praesent tristique. Pretium nibh ipsum consequat nisl vel. Tempus quam pellentesque nec nam aliquam sem. Dui faucibus in ornare quam viverra orci sagittis eu.</p>
      </div>
      <div className='page_content'>
      <h1 className='page_content_header'>&#60; Let's get started &#47;&#62;</h1>
        <Contact/>
      </div>
    </div>
  )
}

export default BusinessSites