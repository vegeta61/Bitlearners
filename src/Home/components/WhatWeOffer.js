import classes from './WhatWeOffer.module.css';

import CIcon from '../../Assets/c-icon.png';
import TreeIcon from '../../Assets/tree.png';
import InterviewIcon from '../../Assets/interview.png';
import MobileDevelopmentIcon from '../../Assets/mobile.png';
import WebDevelopmentIcon from '../../Assets/web.png';
import CompetitiveProgrammingIcon from '../../Assets/competitive-programming.png';

const categories = [
    {
        key: "category-1",
        imageURL: CIcon,
        imgAltText: 'Programming Languages',
        categoryName: 'Programming Languages',
        categoryDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor augue non gravida tincidunt. Aliquam urna urna, pharetra sit amet dapibus sit amet, mattis '
    },
    {
        key: "category-2",
        imageURL: WebDevelopmentIcon,
        imgAltText: 'Web Development',
        categoryName: 'Web Development',
        categoryDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor augue non gravida tincidunt. Aliquam urna urna, pharetra sit amet dapibus sit amet, mattis '
    },
    {
        key: "category-3",
        imageURL: MobileDevelopmentIcon,
        imgAltText: 'Mobile Development',
        categoryName: 'Mobile Development',
        categoryDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor augue non gravida tincidunt. Aliquam urna urna, pharetra sit amet dapibus sit amet, mattis '
    },
    {
        key: "category-4",
        imageURL: TreeIcon,
        imgAltText: 'Data Structures and Algorithms',
        categoryName: 'Data Structures and Algorithms',
        categoryDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor augue non gravida tincidunt. Aliquam urna urna, pharetra sit amet dapibus sit amet, mattis '
    },
    {
        key: "category-5",
        imageURL: CompetitiveProgrammingIcon,
        imgAltText: 'Competitive Programming',
        categoryName: 'Competitive Programming',
        categoryDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor augue non gravida tincidunt. Aliquam urna urna, pharetra sit amet dapibus sit amet, mattis '
    },
    {
        key: "category-6",
        imageURL: InterviewIcon,
        imgAltText: 'Interview Preparations',
        categoryName: 'Interview Preparations',
        categoryDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor augue non gravida tincidunt. Aliquam urna urna, pharetra sit amet dapibus sit amet, mattis '
    }
]

const WhatWeOffer = () => {
    return <div className={classes["what-we-offer"]}>
        <h2 className={classes["section-header"]}>What we offer</h2>
        <p className={classes["section-description"]}>We offer courses, problems, projects and doubt assistance on the following categories. 
            Our experts are working day and night to add more categories for students.</p>
        <div className={classes["categories"]}>
            {   categories.map(category => <CategoryTile category={category} key={category.key} />)}
        </div>
        
    </div>
}

const CategoryTile = (props) => {
    return <div className={classes["category-tile"]}>
        <div className={classes["category-tile-image"]}>
            <img src={props.category.imageURL} alt={props.category.imgAltText}></img>
        </div>
        <div className={classes["category-tile-text"]}>
            <h3>{props.category.categoryName}</h3>
            <p>{props.category.categoryDescription}</p>
        </div>
    </div>
}

export default WhatWeOffer;