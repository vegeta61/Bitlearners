import Top3User from "../components/Top3User";
import UserFilter from "../components/UserFilter";
import UserTable from "../components/UserTable";

import { Row, Col } from 'react-bootstrap';

const LeaderboardPage = () => {
    return <div>
        <Top3User />
        <Row>
            <Col md={8}>
                <UserTable />
            </Col>
            <Col md={4}>
                <UserFilter />
            </Col>
        </Row>
        
       
    </div>
}

export default LeaderboardPage;