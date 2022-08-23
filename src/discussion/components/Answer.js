import classes from './Answer.module.css';

const Answer = () => {
    return <div className="bg-white p-3 border rounded">
        <div className="d-flex justify-content-center">
            <div className="d-flex">
                <img src="https://www.mezcotoyz.com/mas_assets/cache/image/1/c/6/3/7267.Jpg" alt="user" className={classes['user-image']}></img>
                <h5 className="mt-3 mx-2 fw-bold">Rohit Tanwani</h5>
            </div>
            <div>
                <p className="text-muted mt-3 time">1mo</p>
            </div>
        </div>
        <div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis inventore mollitia distinctio enim dolorum ipsum autem cupiditate voluptatibus amet consequatur neque voluptatum quas sequi quaerat officiis accusamus ea vero, vitae voluptatem eum labore. Consequatur dolore culpa, itaque nisi fugit quidem doloribus iure eveniet sequi libero earum aut hic, tempora blanditiis excepturi voluptatum consectetur amet dicta repudiandae quos nulla enim molestiae! Similique quo labore iusto ea iste! Cupiditate perferendis pariatur aliquid exercitationem assumenda nostrum commodi quia ex neque eaque quidem repudiandae molestias, dicta animi dolor debitis sint ad? Deleniti accusamus explicabo alias! Nulla placeat officiis deleniti perspiciatis quod molestiae cumque vitae.
            </p>
        </div>
    </div>
}

export default Answer;