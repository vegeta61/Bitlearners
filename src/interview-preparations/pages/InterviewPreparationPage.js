import React from "react";
import QuickIntroCategory from "../../Shared/components/QuickIntroCategory";
import BestOfBlog from "../components/BestOfBlog";
import CategoryCourses from "../components/CategoryCourses";
import ProblemsAndProjects from "../components/ProblemsAndProjects";

const InterviewPreparationPage = () => {
    return <div>
        <QuickIntroCategory />
        <CategoryCourses />
        <ProblemsAndProjects />
        <BestOfBlog />
    </div>
}

export default InterviewPreparationPage;