import React from "react";
import CardP from "./Card";
import projects from "../projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const createEntry = (project) => (
    <CardP
      key={project.id}
      name={project.name}
      link={project.link}
      description={project.description}
      image={project.image}
    />
  );

function Projects () {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

     return (
        <div>
        <h3 className="heading">Projects</h3>
        <div className="slider-container">
            <Slider {...settings}>
        {projects.map(createEntry)}
         </Slider>
      </div>  
        </div>
       
    )
}

export default Projects