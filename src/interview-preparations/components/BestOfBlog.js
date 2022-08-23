import { Row, Col, Card, Button } from 'react-bootstrap';

const BestOfBlog = () => {
    return <section className="text-center">
        <div>
            <h2>Best of Blog on this Topic</h2>
            <p>Some of the blog post which are related to tools, tips and tricks related to Interviews and Interview preparations</p>
        </div>
        <div className="container my-5">
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                    <Card className="shadow-lg rounded">
                        <Card.Img variant="top" src="https://www.corecruitment.com/img/candidates/preparation/interview-preparation.jpg" />
                        <Card.Body>
                            <Card.Title>5 tips to ace your next coding interview</Card.Title>
                            <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-evenly">
                            <Button variant="danger" size="lg" className="px-5">Read the blog post</Button>
                        </Card.Footer>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </section>
}

export default BestOfBlog;