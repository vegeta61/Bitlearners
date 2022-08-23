import classes from './Footer.module.css';

const QUICKLINKSCLASSES = classes['quick-links'] + ' ' + classes['footer-content'] + ' text-center';
const CONTACTANDFOLLOWCLASSES = classes['contact-and-follow'] + ' ' + classes['footer-content'] + ' text-center';

const Footer = () => {
    return <div>
            <div className="bg-danger text-light d-flex justify-content-around pt-5 pb-3">
                <div className={classes['footer-content'] + ' text-center'}>
                    <h3>Bitlearners</h3>
                    <p className={classes['m-20']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor augue non gravida tincidunt. Aliquam urna urna, pharetra sit amet dapibus sit amet, mattis</p>
                </div>
                <div className={QUICKLINKSCLASSES} >
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Terms and Conditions</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Download our App</a></li>
                        <li><a href="/">Become a Teacher</a></li>
                    </ul>
                </div>
                <div className={QUICKLINKSCLASSES}>
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="/">Programming Languages</a></li>
                        <li><a href="/">Data Structures and Algorithms</a></li>
                        <li><a href="/">Web Development</a></li>
                        <li><a href="/">Mobile Development</a></li>
                        <li><a href="/">Competitive Programming</a></li>
                        <li><a href="/">Interview Preparations</a></li>
                    </ul>
                </div>
                <div className={CONTACTANDFOLLOWCLASSES}>
                    <div className={classes["follow-us"]}>
                        <h4>Follow us on </h4>
                        <i className={`fa-brands fa-facebook " + ${classes['social-icon-item']}`}></i>
                        <i className={`fa-brands fa-instagram " + ${classes['social-icon-item']}`}></i>
                        <i className={"fa-brands fa-twitter " + classes['social-icon-item']}></i>
                        <i className={"fa-brands fa-snapchat " + classes['social-icon-item']}></i>
                        <i className={"fa-brands fa-linkedin " + classes['social-icon-item']}></i>
                    </div>
                    <div className={" mt-4 " + classes["contact-us"]}>
                        <h4>Contact us on </h4>
                        <p>Teela Jamal Pura, Housing Board Colony, Bhopal<br />rohittanwani61@gmail.com <br />+91-8770564664</p>
                    </div>
                </div>
            </div>
            <div className="text-center bg-danger text-light pb-4"> &copy; 2022 Bitlearners | All rights reserved </div>
    </div> 
}

export default Footer;