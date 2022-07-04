import MyBugButton from "../BugButton";
import FinalErrorBoundary from "../FinalErrorBoundary";

const RenderPropsPage = () => {
    return (
        <div>
            <h1>Render Props</h1>
            
            <FinalErrorBoundary>
                <MyBugButton />
            </FinalErrorBoundary>
        </div>
    );
}

export default RenderPropsPage;