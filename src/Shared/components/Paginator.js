import Pagination from 'react-bootstrap/Pagination';

import classes from './Paginator.module.css';

const Paginator = () => {
    return <Pagination size="lg" className={classes['paginator'] + ' mt-4 d-flex text-center'}>
        <Pagination.First className="flex-grow-1"/>
        <Pagination.Prev className="flex-grow-1" />
            <Pagination.Item active className="flex-grow-1">{1}</Pagination.Item>
            <Pagination.Item active className="flex-grow-1">{2}</Pagination.Item>
            <Pagination.Item active className="flex-grow-1">{3}</Pagination.Item>
            <Pagination.Item active className="flex-grow-1">{4}</Pagination.Item>
        <Pagination.Next className="flex-grow-1" />
        <Pagination.Last className="flex-grow-1" />
    </Pagination>
}

export default Paginator;