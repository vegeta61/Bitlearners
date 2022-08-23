import  { Row, Col, Button } from 'react-bootstrap';

const QuestionDescription = () => {
    return <section className="bg-white my-4 shadow p-3 rounded border border-secondary">
        <Row>
            <Col md="1">
                <Button variant="outline-danger" className="mt-2 px-2"> <i className="fa fa-arrow-left" aria-hidden="true"></i> Back</Button>
                <br></br>
                <Button variant="light" className="mt-5 px-4 border border-dark"> <i className="fa-solid fa-chevron-up"></i></Button>
                <p className="mx-4 mt-4">65</p>
                <Button variant="light" className="px-4 border border-dark"> <i className="fa-solid fa-chevron-down"></i></Button>
            </Col>
            <Col md="11">
                <h2 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium dolorum fuga a tempore, animi libero id blanditiis eaque ex!</h2>
                <hr></hr>
                <pre className='text-wrap'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                Ipsum illum, fuga ratione reprehenderit accusantium adipisci blanditiis consequuntur non enim minima aspernatur obcaecati dicta sunt dolor, illo autem qui suscipit voluptas?<br></br>
                Quos amet, dignissimos nobis, obcaecati excepturi ducimus nemo quod, porro ab facilis in debitis voluptate iure qui.<br></br>
                Reiciendis error numquam molestias ex ab consequuntur, ratione excepturi explicabo, quos distinctio ullam a placeat vero amet.<br></br>
                Illum, sed! Dolorem nesciunt vitae eaque non officiis sint quod, est rem minima architecto nostrum blanditiis! Dolorum quos, ipsam nobis et inventore obcaecati.<br></br>
                Itaque blanditiis non vero dignissimos? Facere provident ducimus, corporis labore delectus impedit unde.<br></br>
                </pre>
            </Col>
        </Row>
    </section>
}

export default QuestionDescription;