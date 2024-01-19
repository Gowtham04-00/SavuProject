import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './External.css';
import './Card.css';
import python from './Shared/python.jpg';
import react from './Shared/react.jpg';
import csharp from './Shared/csharp.jpg';
import img from './Shared/img1.jpg';
import img2 from './Shared/img2.jpg';
import img3 from './Shared/img3.jpg';
import video from './Shared/Home.mp4';

const BodyComp = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  const toggleVideoVisibility = () => {
    setIsVideoVisible(!isVideoVisible);
  };

  return (
    <div style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
      <Carousel style={{ width: '100%', margin: 0, padding: 0 }}>
        <Carousel.Item interval={1000}>
          <div style={{ position: 'relative', height: '500px' }}>
            <img className="d-block w-100" src={img3} alt="Institute" style={{ height: '100%', objectFit: 'cover' }} />
            <div className="carousel-caption custom-caption">
              <h3 style={{ color: 'white' }}>Welcome To Net Technologies</h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div style={{ position: 'relative', height: '500px' }}>
            <img className="d-block w-100" src={img2} alt="Institute" style={{ height: '100%', objectFit: 'cover' }} />
            <div className="carousel-caption custom-caption"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div style={{ position: 'relative', height: '500px' }}>
            <img className="d-block w-100" src={img} alt="Institute" style={{ height: '100%', objectFit: 'cover' }} />
            <div className="carousel-caption custom-caption"></div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div>
        <br />
        <div style={{ paddingTop: '50px' }}>
          <div className="row">
            {isVideoVisible && (
              <div className="video-section col-md-6">
                <video width="100%" height="315" autoPlay muted playsInline>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video.
                </video>
              </div>
            )}

            <div className="content-section col-md-6">
              <h1>Net Technologies</h1>
              <p>
                Welcome to Net Technologies Institute – your hub for top-tier programming and technology education. Our seasoned instructors bring real-world experience and industry insights to the classroom, ensuring a premium education for our students. From Python and React to C#, our courses span a spectrum of technologies, providing a holistic learning experience. Whether you're a beginner venturing into programming or an experienced developer, our carefully curated courses cover a spectrum of technologies. Join us for a transformative learning experience and take the first step towards a tech-savvy future!
              </p>
            </div>
          </div>
        </div>
        <h1 style={{ paddingTop: '50px', textAlign:'center'}}>Sample Courses</h1>
        <div className="row">
          <div className="row d-flex justify-content-center">
            <div className="card custom-card col-3 m-5" style={{ width: '18rem' }}>
              <div className="card-img-top">
                <img className="mx-auto" src={python} alt="Python Course" style={{ height: '11rem', width: '100%', objectFit: 'cover' }} />
              </div>
              <div className="card-body bodycard">
                <h5 className="card-title">Python</h5>
                <p className="card-text">This comprehensive Python course is designed for beginners and intermediate learners aiming to master the fundamentals of Python programming</p>
              </div>
            </div>

            <div className="card custom-card col-3 m-5" style={{ width: '18rem' }}>
              <div className="card-img-top">
                <img className="mx-auto" src={react} alt="React Course" style={{ height: '11rem', width: '100%', objectFit: 'cover' }} />
              </div>
              <div className="card-body bodycard">
                <h5 className="card-title">React</h5>
                <p className="card-text">Dive into the world of front-end development with this React course, tailored for developers eager to create modern, responsive user interfaces.</p>
              </div>
            </div>

            <div className="card custom-card col-3 m-5" style={{ width: '18rem' }}>
              <div className="card-img-top">
                <img className="mx-auto" src={csharp} alt="C# Course" style={{ height: '11rem', width: '100%', objectFit: 'cover' }} />
              </div>
              <div className="card-body bodycard">
                <h5 className="card-title">C#</h5>
                <p className="card-text">Unleash the full potential of C# with this in-depth programming course designed for both beginners and those with prior coding experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyComp;
