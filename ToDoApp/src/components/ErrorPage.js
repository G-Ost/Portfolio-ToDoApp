import { useHistory } from "react-router-dom";

function ErrorPage() {
    const history = useHistory();

    function redirectToLoginpage() {
        let path = `/login`;
        history.replace(path);
    }

    let buttonStyle = { backgroundColor: "#4CAF50", color: "white", fontSize: window.innerHeight / 20 };
    return (<>
        <h1>It looks like you're lost, m8.</h1>
        <button style={buttonStyle} onClick={redirectToLoginpage}>Take me back.</button>
    </>)
}

export default ErrorPage;