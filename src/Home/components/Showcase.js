import { Carousel, Button } from 'react-bootstrap';

import Background1 from '../../Assets/Untitled.jpeg';
import Background2 from '../../Assets/background-2.jpg';
import Background3 from '../../Assets/background-3.jpg';

import BitLearnersIcons from '../../Assets/bit.png';

import classes from './Showcase.module.css';

const CAROUSELCLASSES = 'd-block w-100 ' + classes['h-100'];

const Showcase = () => {
    return <Carousel>
    <Carousel.Item interval={3000}>
      <img
        className={CAROUSELCLASSES}
        src={Background1}
        alt="First slide"
      />
      <Carousel.Caption className={classes['showcase-content']}>
        <img src={BitLearnersIcons} alt="bit.png" className={classes['website-logo']} />
        <h3 className={classes['brand-name']}>BitLearners</h3>
        <p className={classes['brand-description']}>Best site for learning, competeting and growing as a software engineer.</p>
        <Button variant="danger" size="lg" className="mx-1 px-5">Login</Button>
        <Button variant="danger" size="lg" className="mx-2 px-5">SignUp</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className={CAROUSELCLASSES}
        src={Background2}
        alt="Second slide"
      />
      <Carousel.Caption className={classes['showcase-content']}>
        <img src={BitLearnersIcons} alt="bit.png" className={classes['website-logo']} />
        <h3 className={classes['brand-name']}>BitLearners</h3>
        <p className={classes['brand-description']}>Best site for learning, competeting and growing as a software engineer.</p>
        <Button variant="danger" size="lg" className="mx-1 px-5">Login</Button>
        <Button variant="danger" size="lg" className="mx-2 px-5">SignUp</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className={CAROUSELCLASSES}
        src={Background3}
        alt="Third slide"
      />
      <Carousel.Caption className={classes['showcase-content']}>
        <img src={BitLearnersIcons} alt="bit.png" className={classes['website-logo']} />
        <h3 className={classes['brand-name']}>BitLearners</h3>
        <p className={classes['brand-description']}>Best site for learning, competeting and growing as a software engineer.</p>
        <Button variant="danger" size="lg" className="mx-1 px-5">Login</Button>
        <Button variant="danger" size="lg" className="mx-2 px-5">SignUp</Button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
}

export default Showcase;