import Showcase from "./components/Showcase";
import WhatWeOffer from "./components/WhatWeOffer";
import BitlearnersForCollege from "./components/BitlearnersForCollege";
import Features from "./components/Features";
import React from "react";

const IndexPage = () => {
    return <React.Fragment>
        <Showcase />
        <WhatWeOffer />
        <BitlearnersForCollege />
        <Features />
    </React.Fragment>
}

export default IndexPage;