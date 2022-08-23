import classes from  './QuickIntroCategory.module.css';

const QuickIntroCategory = (props) => {
    return <div className={classes['quick-intro'] + " bg-danger my-4 py-4 mx-3"} >
        <div className="d-flex justify-content-around container text-light">
            <div>
                <iframe className={classes['video-player']} src="https://www.youtube.com/embed/nbUyiEjhVPk" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            
            <div className="mx-3 d-flex flex-column justify-content-center align-items-center">
                <h2 className={classes['quick-intro-section-header']}>Quick Introduction of the section</h2>
                <p className={classes['quick-intro-section-description']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed elementum lacus. Integer nec urna tincidunt, sodales erat et, pulvinar magna. Maecenas ac massa sapien. Aenean congue mauris ac lacus blandit, ut suscipit ante fringilla. Ut elementum in urna at mattis. Maecenas egestas ultrices tincidunt. Nullam laoreet justo vel lobortis blandit. Aliquam ut purus vitae velit blandit finibus.</p>
            </div>
            
        </div>
    </div>
}

export default QuickIntroCategory;