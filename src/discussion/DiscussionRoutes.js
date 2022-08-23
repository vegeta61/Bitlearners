import { Route} from "react-router-dom";

import DiscussionPage from './pages/DiscussionPage';
import QuestionPage from './pages/QuestionPage';

const DiscussionRoutes = () => {
        return [<Route path="/discussion" element={<DiscussionPage />} key="discussion"/>, 
        <Route path="/discussion/:questionid" element={<QuestionPage />} key="discussion/:questionid" />];
}

export default DiscussionRoutes;