//Pages import
import IndexPage from './Home/IndexPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';

import Footer from './Shared/components/Footer';
import NavbarBitlearners from './Shared/components/Navbar';
import InterviewPreparationPage from './interview-preparations/pages/InterviewPreparationPage';
import LeaderboardPage from './leaderboard/pages/LeaderboardPage';
import CompetitionsPage from './competitions/pages/CompetitionsPage';

import DiscussionRoutes from './discussion/DiscussionRoutes';
import AuthRoutes from './Authentication/AuthRoutes';
import CoursesRoutes from './Courses/CoursesRoutes';


import './App.css';


const discussionRoutes = DiscussionRoutes();
const authRoutes = AuthRoutes();
const coursesRoutes = CoursesRoutes();


function App() {
  return <Router>
      <NavbarBitlearners />
      <Routes>
          <Route path='/' element={<IndexPage />} />
          { authRoutes }
          <Route path="/interview-preparations" element={<InterviewPreparationPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/competitions" element={<CompetitionsPage />} />
          {coursesRoutes}
  
          {discussionRoutes}
      </Routes>

      <Footer />
  </Router>
}

export default App;
