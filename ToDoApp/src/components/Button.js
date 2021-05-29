import deleteButtonImage from "../Images/bin.png";
import addButtonImage from "../Images/add.png";

function Button(props) {
    let delButtonSize = window.innerHeight / 35;
    let addButtonSize = window.innerHeight / 14;
    if (props.isRemove) {
        return (
            <img alt="removeButton" className="removeButton" src={deleteButtonImage} style={{ height: delButtonSize, width: delButtonSize }} onClick={props.clickFunction}></img>
        )
    } else;
    return (
        <img alt="submitButton" className="submitButton" src={addButtonImage} style={{ height: addButtonSize, width: addButtonSize, top: -addButtonSize / 8 }} onClick={props.clickFunction}></img>
    )
}
export default Button;