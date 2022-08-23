import React from "react";
import CompetitionsDisplay from "../component/CompetitionsDisplay";
import CompetitionsFilter from "../component/CompetitionsFilter";

const CompetitionsPage = () => {
    return <React.Fragment>
        <CompetitionsFilter />
        <CompetitionsDisplay />
    </React.Fragment>
}

export default CompetitionsPage;