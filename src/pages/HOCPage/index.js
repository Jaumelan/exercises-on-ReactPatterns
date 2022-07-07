import MyFormControlled from "../../components/WithControlledForm";

const HOCPage = () => {
    //const handleNormalSubmit = data => alert(data);

    return (
        <>
            <h2>Example of a High Order Component</h2>
            <MyFormControlled />
        </>
    )
}

export default HOCPage