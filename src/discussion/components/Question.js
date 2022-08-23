import { Row, Col } from 'react-bootstrap';

import classes from './Question.module.css';

const Question = () => {
    return <div className="border border-bottom border-top rounded shadow-sm">
        <Row className="py-3">
            <Col md="1"  className="text-center">
                <img src="https://cdn2.iconfinder.com/data/icons/user/539/default-avatar.png" className={classes['user-image'] + " rounded-circle"} alt="user"></img>
            </Col>
            <Col md="9">
                <h2 className="m-0">Microsoft Online Assessment Questions</h2>
                <p className="m-0">Min Moves to Make String Without 3 Identical Consecutive Letters</p>
            </Col>
            <Col md="2" className="text-center">
                <p className="m-0"><i className="fa-solid fa-2x fa-thumbs-up pt-3"></i> <span>72</span> &nbsp;&nbsp;&nbsp;<i className="fa fa-2x fa-comments pt-3" aria-hidden="true"></i> <span>45</span></p>
            </Col>
        </Row>
    </div>
}

export default Question;