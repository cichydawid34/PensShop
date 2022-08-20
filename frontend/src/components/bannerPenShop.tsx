import Carousel from 'react-bootstrap/Carousel';
import '../stylesheets/banner.css'
function BannerPensShop() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.reynolds-pens.com/wp-content/uploads/2021/08/Reynolds-Product-Listing-Banner-Fountain-Pen-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://www.intentionpen.com/wp-content/uploads/2022/05/Intention-Pen-Banner.jpg?x74444"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default BannerPensShop;