import {Nav, Tab, Card, Button, Row, Col } from 'react-bootstrap';

import classes from './ProblemsAndProjects.module.css';

const ProblemsAndProjects = () => {
    return <section className="text-center my-5">
        <div>
            <h2>Problems and Projects</h2>
            <p>Below presented are all the related sections which will be covered in interview.</p>
        </div>
        <div className="container">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={12}>
                        <Nav variant="pills" className="w-100 d-flex justify-content-evenly flex-wrap">
                        <Nav.Item className={classes['problems-menu-item']}>
                            <Nav.Link eventKey="first">Problems </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={classes['problems-menu-item']}>
                            <Nav.Link eventKey="second">Projects </Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={12} >
                        <Tab.Content>
                            <Tab.Pane eventKey="first" className="feature-display">
                                <div className="d-flex justify-content-around flex-wrap my-5">
                                    <Card style={{ width: '18rem' }} className="shadow-lg mt-4">
                                        <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*1KHGpzxpcFXkpbzkI_4Mog.jpeg" />
                                        <Card.Body>
                                            <Card.Title>Coding Questions</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger">Solve problems</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }} className="shadow-lg mt-4">
                                        <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*1KHGpzxpcFXkpbzkI_4Mog.jpeg" />
                                        <Card.Body>
                                            <Card.Title>Coding Questions</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger">Solve problems</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }} className="shadow-lg mt-4">
                                        <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*1KHGpzxpcFXkpbzkI_4Mog.jpeg" />
                                        <Card.Body>
                                            <Card.Title>Coding Questions</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger">Solve problems</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }} className="shadow-lg mt-4">
                                        <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*1KHGpzxpcFXkpbzkI_4Mog.jpeg" />
                                        <Card.Body>
                                            <Card.Title>Coding Questions</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger">Solve problems</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }} className="shadow-lg mt-4">
                                        <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*1KHGpzxpcFXkpbzkI_4Mog.jpeg" />
                                        <Card.Body>
                                            <Card.Title>Coding Questions</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger">Solve problems</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }} className="shadow-lg mt-4">
                                        <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*1KHGpzxpcFXkpbzkI_4Mog.jpeg" />
                                        <Card.Body>
                                            <Card.Title>Coding Questions</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger">Solve problems</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }} className="shadow-lg mt-4">
                                        <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*1KHGpzxpcFXkpbzkI_4Mog.jpeg" />
                                        <Card.Body>
                                            <Card.Title>Coding Questions</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger">Solve problems</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }} className="shadow-lg mt-4">
                                        <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*1KHGpzxpcFXkpbzkI_4Mog.jpeg" />
                                        <Card.Body>
                                            <Card.Title>Coding Questions</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger">Solve problems</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className="d-flex justify-content-around flex-wrap my-5">
                                    <Card style={{ width: '23rem' }} className="shadow-lg mx-2 my-3">
                                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger" size="lg" className="px-5">Solve Now</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '23rem' }} className="shadow-lg mx-2 my-3">
                                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png" />
                                        <Card.Body>
                                            <Card.Title>TicTacToe</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger" size="lg" className="px-5">Solve Now</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '23rem' }} className="shadow-lg mx-2 my-3">
                                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger" size="lg" className="px-5">Solve Now</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '23rem' }} className="shadow-lg mx-2 my-3">
                                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger" size="lg" className="px-5">Solve Now</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '23rem' }} className="shadow-lg mx-2 my-3">
                                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger" size="lg" className="px-5">Solve Now</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '23rem' }} className="shadow-lg mx-2 my-3">
                                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <Button variant="danger" size="lg" className="px-5">Solve Now</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    </section>
}

export default ProblemsAndProjects;