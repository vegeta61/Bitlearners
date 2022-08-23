import { Container } from 'react-bootstrap';
import CategoryCourses from '../../interview-preparations/components/CategoryCourses';
import CoursesFilter from '../components/CoursesFilter';


const CoursesPage = () => {
    return <div>
        <CoursesFilter />
        <Container>
            <CategoryCourses />
            <CategoryCourses />
            <CategoryCourses />
            <CategoryCourses />
            <CategoryCourses />
        </Container>
    </div>
}

export default CoursesPage;