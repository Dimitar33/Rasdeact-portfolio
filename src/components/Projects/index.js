import "./index.scss";
import Loader from "react-loaders";
import Slider from "react-slick";
import projectsData from "./data/projectsData";

export default function Projects() {
 
  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <>
      <div className="container courses-page">
        <div className="carousel">
          <Slider {...settings}>
            {projectsData.map((slide, index) => {
              return (
                <div key={index}>
                  <a target="_blank" key={index} href={slide.site}>
                    <img src={slide.image} alt={slide.alt} key={index}/>
                  </a>
                  <a className="git-hub-link" target="_blank" href={slide.code}>sourse code</a>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <Loader type="pacman"></Loader>
    </>
  );
}
