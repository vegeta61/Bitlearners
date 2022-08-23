
import classes from './CoursesFilter.module.css';

import { Form, Row, Col } from 'react-bootstrap';


const CoursesFilter = () => {
    return <div className={classes['courses-filter'] + " bg-danger my-4 py-5 mx-5"} >
            <div className="container text-light text-center">
                <h2>Search in courses</h2>
                <Form>
                    <Row className="my-3">
                        <Col md="4">
                            <Form.Control type="text" placeholder="Search by course name" size="lg" />
                        </Col>
                        <Col md="4">
                            <Form.Select aria-label="Choose Category" size="lg">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col md="4">
                        <Form.Select aria-label="Course Type" size="lg">
                                <option>Select Catagory</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    
                    <Row className="my-3">
                        <Col md="4">
                            <Form.Control type="text" placeholder="Search by course name" size="lg" />
                        </Col>
                        <Col md="4">
                            <Form.Select aria-label="Choose Category" size="lg">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col md="4">
                        <Form.Select aria-label="Course Type" size="lg">
                                <option>Select Catagory</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form>
            </div>
           </div>
}

export default CoursesFilter;