import Question from "../components/Question";
import RichTextEditor from "../components/RichTextEditor";
import Paginator from "../../Shared/components/Paginator";

const DiscussionPage = () => {
    return <div className="container my-4">
        <div className="mb-4">
            <RichTextEditor />
        </div>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Paginator />
    </div>
}

export default DiscussionPage;