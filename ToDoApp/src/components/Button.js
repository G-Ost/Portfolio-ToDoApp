import deleteButtonImage from "../Images/bin.png";
import addButtonImage from "../Images/add.png";

function Button(props) {
    let delButtonSize = window.innerWidth / 100;
    let addButtonSize = window.innerWidth / 40;
    if (props.isRemove) {
        return (
            // <button className="removeButton" onClick={props.clickFunction}>{props.title}</button>
            <img className="removeButton" src={deleteButtonImage} style={{ height: delButtonSize, width: delButtonSize }} onClick={props.clickFunction}></img>
        )
    } else;
    return (
        // <button className="submitButton" onClick={props.clickFunction}>{props.title}</button>
        <img className="submitButton" src={addButtonImage} style={{ height: addButtonSize, width: addButtonSize, top: addButtonSize / 3.2 }} onClick={props.clickFunction}></img>
    )
}
export default Button;

//submitButton
//removeButton
//style={{ fontSize: window.innerHeight / 100, height: window.innerHeight / 40, width: window.innerHeight / 40 }}