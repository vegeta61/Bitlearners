import CoursesPage from './pages/CoursesPage';
import CoursePage from './pages/CoursePage';

import {Route} from 'react-router-dom'; 

const CoursesRoutes = () => {
    return [
        <Route path="/courses" element={<CoursesPage />} key="/courses" />,
        <Route path="/courses/:courseid" element={<CoursePage />} key="/courses/:courseid" />
    ]
}

export default CoursesRoutes;