import { Form } from 'react-bootstrap';

import classes from './CompetitionsFilter.module.css';

const CompetitionsFilter = () => {
    return <div className={classes['competitons-filter'] + " bg-danger my-4 py-5 mx-5"} >
    <div className="d-flex justify-content-around container text-light align-items-center flex-wrap">
        <h2>Competitions Filter</h2>
        <div className="m-3">
            <h6>Select your preferences</h6>
            <Form.Check type="switch" id="custom-switch" label="Ongoing" />
            <Form.Check type="switch" id="custom-switch" label="Completed" />
            <Form.Check type="switch" id="custom-switch" label="To Register" />
        </div>
        <div className="m-3">
            <h6>Competitions, Hackathons or Quizes</h6>
            <Form.Check type="switch" id="custom-switch" label="Coding Competitions only" />
            <Form.Check type="switch" id="custom-switch" label="Quizes only" />
            <Form.Check type="switch" id="custom-switch" label="Hackathons only" />
        </div>
        <div className="m-3">
            <h6>Friends, College or All over world</h6>
            <Form.Check type="switch" id="custom-switch" label="Friends Contests" />
            <Form.Check type="switch" id="custom-switch" label="College Contests" />
            <Form.Check type="switch" id="custom-switch" label="All Contests" />
        </div>
    </div>
</div>
}

export default CompetitionsFilter;