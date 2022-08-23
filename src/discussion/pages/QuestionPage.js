import Answer from '../components/Answer';
import QuestionDescription from '../components/QuestionDescription';
import RichTextEditor from '../components/RichTextEditor';

const QuestionPage = () => {
    return <section className="mx-5">
        <QuestionDescription />
        <i className="fa fa-comments fa-lg" aria-hidden="true"></i> &nbsp;Comments: 45<br></br>
        <RichTextEditor />
        <div className="mb-4">
            <Answer />
            <Answer />
            <Answer />
            <Answer />
        </div>
    </section>
}

export default QuestionPage;