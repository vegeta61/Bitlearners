import classes from './UserFilter.module.css';

import { Form, Button } from 'react-bootstrap';

const UserFilter = () => {

    return <div className="border border-secondary rounded-3 mx-5 pb-5 pt-4 text-center mt-5 shadow-lg">
        <h2 >Filter your search:</h2>
        <div className="container">
            <hr className="mb-5" />
        </div>
        
        <div className="d-flex justify-content-evenly flex-wrap">
            <div className={classes['user-input'] + ' mb-3 '}>
                <Form.Label>College: </Form.Label> 
                <Form.Select size="lg" className="px-5" >
                    <option>All</option>
                    <option>My College</option>
                </Form.Select>
            </div>
            <div className={classes['user-input']}>
                <Form.Label>Category: </Form.Label>
                <Form.Select size="lg" >
                    <option>All</option>
                    <option>Programming Languages</option>
                    <option>Data Structures and Algorithms</option>
                    <option>Web Development</option>
                    <option>Android Development</option>
                    <option>Competitive Programming</option>
                    <option>Interview Preparations</option>
                </Form.Select>
            </div>
            <div className={classes['user-input'] + ' mb-3'}>
                <Button variant="success" className={classes['button-margin']} size="lg">Search User</Button>
            </div>
        </div>
    </div>
    
    
}

export default UserFilter;