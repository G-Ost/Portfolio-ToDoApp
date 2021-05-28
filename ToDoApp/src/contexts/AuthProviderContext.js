import * as React from "react";
import { useHistory } from "react-router-dom";


const authContext = React.createContext();

function AuthProviderContext(props) {
    const [isLogged, setIsLogged] = React.useState(false);
    let history = useHistory();

    const authTokens = ["QpwL5tke4Pnpja7X4"];



    async function requestAuth(email, password) {
        let result;
        await fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "email": email,
                    "password": password
                }
            )
        })
            .then((response) => {
                if (response.status !== 200) {
                    result = false;
                }
                else {
                    result = response.json()
                }

            })
        return result;
    }


    async function signIn(email, password) {
        let didWorked = false;
        await requestAuth(email, password).then((result) => {
            if (result) {
                if (authTokens.includes(result.token)) {
                    didWorked = true;
                    setIsLogged(true);
                    history.push("/todo");
                }

            }
        })
        return didWorked;
    }


    const signOut = () => setIsLogged(false);

    const value = { isLogged, signIn, signOut }
    return <authContext.Provider value={value}>{props.children}</authContext.Provider>
}

export { AuthProviderContext, authContext }