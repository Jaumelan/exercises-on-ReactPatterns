import { useState } from "react"

const MyBugButton = () => {
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        setHasError(true);
    }

    if (hasError) {
        throw new Error("Something went wrong");
    }

    return (
        <button onClick={handleError}>
            Crash App
        </button>
    );
}

export default MyBugButton;

