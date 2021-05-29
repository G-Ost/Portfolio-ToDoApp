import { useContext } from "react";
import { authContext } from "../contexts/AuthProviderContext";
import lock from "../Images/lock.png";
import React, { useState } from "react";
function PublicPage(props) {
    const { signIn } = useContext(authContext);
    const [formInfo, setFormInfo] = useState({ email: "email", password: "password" })
    const [showError, setShowError] = useState(false)
    let inputStyle = { fontSize: window.innerHeight / 40 };

    async function submit() {
        await signIn(formInfo.email, formInfo.password).then(
            (result) => {
                if (!result) {
                    setShowError(true)
                }
            }
        )
        // if (!signIn(formInfo.email, formInfo.password)) {
        //     console.log("x")
        //     setShowError(true)
        // }

    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: window.innerHeight / 20 }}>User login</h1>
            <input style={inputStyle} onFocus={() => { setFormInfo({ ...formInfo, email: "" }); setShowError(false) }} value={formInfo.email} onChange={(e) => { setFormInfo({ ...formInfo, email: e.target.value }) }}></input>
            <img alt="lockIcon" style={{ position: "absolute", display: "inline-block", top: window.innerHeight / 9, height: window.innerHeight / 11 }} src={lock}></img>
            <br />
            <input style={inputStyle} value={formInfo.password} onFocus={() => { setFormInfo({ ...formInfo, password: "" }); setShowError(false) }} onChange={(e) => { setFormInfo({ ...formInfo, password: e.target.value }) }}></input>
            {showError && <h2 style={{ fontSize: window.innerHeight / 50, color: "red" }}>Wrong email or password.</h2>}
            {!showError && <h2 style={{ fontSize: window.innerHeight / 50 }}>&nbsp;</h2>}
            <button style={{ fontSize: window.innerHeight / 35, background: "grey", color: "white" }} onClick={() => { submit() }}>Submit</button>
            <br />
            <h2 id="hintMessage" onClick={() => { setFormInfo({ email: "eve.holt@reqres.in", password: "whatever" }) }} style={{ fontSize: window.innerHeight / 45 }}>Hint: auth server will accept email: "eve.holt@reqres.in" and any non-empty string as password (or just click here).</h2>

        </div>
    )
}
export default PublicPage;