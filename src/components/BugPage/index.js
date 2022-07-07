import MyBugButton from "../BugButton";
import FinalErrorBoundary from "../FinalErrorBoundary";
import ErrorBoundary from "../ErrorBoundary";

const RenderPropsPage = () => {
    return (
        <div>
            <h1>Render Props</h1>
            
            <FinalErrorBoundary>
                <MyBugButton />
            </FinalErrorBoundary>
            <hr />
            <ErrorBoundary render={() => <h2>Something went wrong.</h2>}>
                <MyBugButton />
            </ErrorBoundary>
        </div>
    );
}

export default RenderPropsPage;