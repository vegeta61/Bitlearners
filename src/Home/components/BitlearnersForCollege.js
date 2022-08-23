import { Button } from 'react-bootstrap';

import classes from './BitlearnersForCollege.module.css';

import BitlearnersForCollegeImage from '../../Assets/bitlearners-for-college.png';

const BitlearnersForCollege = () => {
    return <div className={classes['college-bitlearners-promotion']}>
        <div className={classes['text-content']}>
            <h2 className={classes['text-header']}>Bitlearners for College</h2>
            <p className={classes['text-description']}>Just imagine all the amazing things of Bitlearners configured just for your college. Your college community, your college coding competitions platform, your college TNP website and many more roles can be played by Bitlearners. Ask your college to sign up with us. Click on the button below to make a request. </p>
            <Button variant="outline-light" size="lg" className="px-5">Make a request</Button>
        </div>
        <div className={classes['image']}>
            <img src={BitlearnersForCollegeImage} alt="Bitlearners for College" />
        </div>
    </div>
}

export default BitlearnersForCollege;