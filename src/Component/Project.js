import React from "react";
import "../Css/Project.css";
import Foodimg from "../images/food.png";
import Fimg from "../images/image1.png";
import { Carousel, Image } from "react-bootstrap";

const Project = () => {
  return (
    <div className="project-div">
      <Carousel>
        <Carousel.Item>
          <Image className="img-div" src={Foodimg}></Image>
          {/* <Carousel.Caption>
            <h3>Food Project</h3>
            <p>Food Information all detail </p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <Image className="img-div" src={Fimg}></Image>
          {/* <Carousel.Caption>
            <h3>JOb Way - Job Portal</h3>
            <p>Job Portal all Information All Detail</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Project;

{
  /* <Carousel.Item>
  <ExampleCarouselImage text="Second slide" />
  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>; */
}
