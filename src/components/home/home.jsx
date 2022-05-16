import './home.css';
import img from '../props/clogo.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About us</span> <br />
        <p>
          Tranetech Software Solutions, we are a team with years of knowledge and experience for software development. Every one of us has a passion for design, development and successful deployment. In Tranetech Software Solutions, we deliver what we promise. Our team works on a client-centric approach that aims to deliver sustainable results that promote business growth. With our expertise, we help you deliver the perfect system for your business and make complex systems simple for the end-user and clients.
        </p><br />
        <p>        
          Technologies play a vital role in turning an idea into a reality that is why we had a team consists of domain experts from varied technologies. We expertise in building intuitive solutions with technologies built on your choice of platform. The applications are horizontally scalable and keep your business online, available and responsive to change. All you need is to let us know your requirement and we will deliver a technical solution worthy of outstanding business success.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
