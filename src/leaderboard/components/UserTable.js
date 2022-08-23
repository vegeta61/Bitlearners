import { Table } from 'react-bootstrap';

import classes from './UserTable.module.css';

const UserTable = () => {
    return <div className="mx-5 mt-2 mb-5 pt-3 text-center text-light">
        <Table striped bordered hover variant="dark" responsive className={classes['user-table']}>
            <thead>
                <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Points</th>
                <th>College</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>4</td><td>Mark Otto</td><td>867</td><td>LNCT</td></tr>
                <tr><td>5</td><td>Jacob Thornton</td><td>445</td><td>LNCT</td></tr>
                <tr><td>6</td><td >Larry The Bird</td><td>223</td><td>LNCT</td></tr>
                <tr><td>7</td><td >Larry The Bird</td><td>223</td><td>LNCT</td></tr>
                <tr><td>8</td><td >Larry The Bird</td><td>223</td><td>LNCT</td></tr>
                <tr><td>9</td><td >Larry The Bird</td><td>223</td><td>LNCT</td></tr>
                <tr><td>10</td><td >Larry The Bird</td><td>223</td><td>LNCT</td></tr>
                <tr><td>11</td><td >Larry The Bird</td><td>223</td><td>LNCT</td></tr>
                <tr><td>12</td><td >Larry The Bird</td><td>223</td><td>LNCT</td></tr>
                <tr><td>13</td><td >Larry The Bird</td><td>223</td><td>LNCT</td></tr>
            </tbody>
        </Table>
    </div>
}

export default UserTable;