
import { Card, Button } from 'react-bootstrap';
import classes from './Top3User.module.css';

const Top3User = () => {
    return <div className={`d-flex justify-content-evenly ${classes['leaderboard-winner']} flex-wrap mx-5 mt-4 py-4 text-center bg-danger`}>
        <Card style={{ width: '20rem' }} className="shadow-lg rounded my-3">
            <img src="https://cdn-icons-png.flaticon.com/512/2583/2583344.png"  alt="first place" className={classes['position-image']} />
            <Card.Img variant="top" src="https://otakukart.com/wp-content/uploads/2021/12/L-death-note.jpg" />
            <Card.Body>
                <Card.Title>Rohit Tanwani</Card.Title>
                <Card.Text><strong>Rank: </strong> 1<br /><strong>Points: </strong> 900<br /><strong>College: </strong> LNCT</Card.Text>
                <Button variant="danger" className="px-5">Visit profile</Button> 
            </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }} className="shadow-lg rounded my-3">
            <img src="https://cdn-icons-png.flaticon.com/512/2583/2583319.png"  alt="first place" className={classes['position-image']} />
            <Card.Img variant="top" src="https://www.looper.com/img/gallery/ryuk-in-netflixs-death-note-had-to-be-played-by-two-actors/intro-1503169693.jpg" />
            <Card.Body>
                <Card.Title>Uttkarsh Raj</Card.Title>
                <Card.Text><strong>Rank: </strong> 2<br /><strong>Points: </strong> 890<br /><strong>College: </strong> LNCT</Card.Text>
                <Button variant="danger" className="px-5">Visit profile</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }} className="shadow-lg rounded my-3">
            <img src="https://cdn-icons-png.flaticon.com/512/2583/2583434.png"  alt="first place" className={classes['position-image']} />
            <Card.Img variant="top" src="https://i.ytimg.com/vi/KtyNlzEYtNM/maxresdefault.jpg" />
            <Card.Body>
                <Card.Title>Aman Singh</Card.Title>
                <Card.Text><strong>Rank: </strong> 3<br /><strong>Points: </strong> 880<br /><strong>College: </strong> LNCT</Card.Text>
                <Button variant="danger" className="px-5">Visit profile</Button>
            </Card.Body>
        </Card>
    </div>
}

export default Top3User;