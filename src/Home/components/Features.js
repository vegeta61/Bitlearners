import {Tab, Row, Col, Nav } from 'react-bootstrap';

import Background1 from '../../Assets/Untitled.jpeg';
import Background2 from '../../Assets/background-2.jpg';
import Background3 from '../../Assets/background-3.jpg';

import './Features.css';

const Features = () => {
    return <div className="features">
        <h2 className="section-header">Bitlearners Features</h2>
        <p className="section-description">Following are the subset of the most important features of Bitlearners.</p>

        <div className='container my-5'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={4}>
                        <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first" className="features-item" >Variety of Courses to Learn</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second" className="features-item">Lots and Lots of projects to build and problems to solve</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" className="features-item">Competitions to show off your skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth" className="features-item">Be in top of leaderboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fifth" className="features-item">Prepare for your interview in the best way possible</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={8} >
                        <Tab.Content>
                            <Tab.Pane eventKey="first" className="feature-display">
                                <img src={Background1} alt="courses" className="feature-image"/>
                                <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat euismod consectetur. Aliquam pulvinar pulvinar massa, vel convallis magna dignissim nec. Morbi luctus lacinia congue. ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eleifend dapibus iaculis.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img src={Background2} alt="courses" className="feature-image"/>
                                <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat euismod consectetur. Aliquam pulvinar pulvinar massa, vel convallis magna dignissim nec. Morbi luctus lacinia congue. ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eleifend dapibus iaculis.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img src={Background3} alt="courses" className="feature-image"/>
                                <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat euismod consectetur. Aliquam pulvinar pulvinar massa, vel convallis magna dignissim nec. Morbi luctus lacinia congue. ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eleifend dapibus iaculis.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img src={Background2} alt="courses" className="feature-image"/>
                                <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat euismod consectetur. Aliquam pulvinar pulvinar massa, vel convallis magna dignissim nec. Morbi luctus lacinia congue. ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eleifend dapibus iaculis.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <img src={Background1} alt="courses" className="feature-image"/>
                                <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat euismod consectetur. Aliquam pulvinar pulvinar massa, vel convallis magna dignissim nec. Morbi luctus lacinia congue. ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eleifend dapibus iaculis.</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    </div>
}

export default Features;