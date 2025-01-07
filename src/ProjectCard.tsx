import React, { useState, useEffect } from 'react';;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectCard.css"


const ImageSlider = ({ images }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust autoplay speed as needed
    adaptiveHeight: false, // Crucial for varying image sizes
    centerMode: true, // Optional: Centers the current slide
    centerPadding: "-2px"
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {images.map((image: any, index: any) => (
          <div key={index} className="image-slide">
            <div className="image-wrapper"> {/* New wrapper for vertical centering */}
                <img
                    src={image.src}
                    alt={image.alt}
                    style={{ width: '100%', maxHeight: '100%', display: 'block' }}
                />
            </div>
        </div>
        ))}
      </Slider>
    </div>
  );
};


interface ProjectSummary {
    name: string;
    summary: string;
    skills: string;
    images: { src: string; alt: string }[];
    video?: string;
    paper?: string;
}


function ProjectCard(props: any) {
    const summary: ProjectSummary = props.summary;
    return(
        <div className='project-card'>
            <h3>{summary.name}</h3>
            <p><u><i>Relevant Skills:</i></u> {summary.skills}</p>
            <p><u><i>Summary:</i></u> {summary.summary}</p>
            {summary.video && <iframe src={summary.video}></iframe>}
            {summary.images && <ImageSlider images={summary.images} />}
            {summary.paper && <object data={summary.paper}/>}
            {summary.paper && <p className='subte'><i>right click to download</i></p>}
        </div>
    );
    
};

export default ProjectCard;

