import { Carousel } from "antd";

const About = () =>{
    return (
        <div>
           <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x400?text=Special+Offer+1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Special Offer 1</h3>
          <p>Get 20% off on selected bicycles!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x400?text=Special+Offer+2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>New Arrivals</h3>
          <p>Check out our latest models!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
};
export default About;