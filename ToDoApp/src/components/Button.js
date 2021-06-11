import deleteButtonImage from "../Images/bin.png";
import { useContext } from "react";
import addButtonImage from "../Images/add.png";
import { TaskListReducerContext } from "../contexts/taskListReducerContext"

function Button(props) {

    let { elementsSizeUnit } = useContext(TaskListReducerContext);
    let delButtonSize = elementsSizeUnit / 14;
    let addButtonSize = elementsSizeUnit / 10;
    if (props.isRemove) {
        return (
            <img alt="removeButton" className="removeButton" src={deleteButtonImage} style={{ height: delButtonSize,marginRight:"1%", width: delButtonSize, float:"right", cursor:"pointer"}} onClick={props.clickFunction}></img>
        )
    } else;
    return (
        <img alt="submitButton" className="submitButton" src={addButtonImage} style={{ height: addButtonSize, width: addButtonSize, cursor:"pointer" }} onClick={props.clickFunction}></img>
    )
}
export default Button;