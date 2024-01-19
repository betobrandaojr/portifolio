import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { responsiveSettings } from '../components/ResponsiveSettings';
import { image1 } from '../assets/img/certificados/JavaScript.png';

const certificates = [
  {
    title: "Javascript",
    image: "./public/JavaScript.png"
  },
  {
    title: "Node",
    image: "../assets/img/certificados/Node.png"
  },

];

export const Skills = () => {
  return (
    <section className='skill' id='skills'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Certificados</h2>
              <p>Certificados que recebi ao longo da carreira:</p>
              <Carousel responsive={responsiveSettings} infinite={true} className="owl-carousel owl-theme skill-slider">
                {certificates.map((certificate, index) => (
                  <div key={index} className="item">
                    <img src={certificate.image} alt={certificate.title} />
                    <h5>{certificate.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
