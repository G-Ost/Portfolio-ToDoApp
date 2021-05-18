import { useContext } from "react";
import { TaskListReducerContext } from "../contexts/taskListReducerContext"

function Checkbox(props) {
    let { elementsSizeUnit } = useContext(TaskListReducerContext);
    return <input onChange={props.onClickBox} type="checkbox" checked={props.isChecked} style={{ transform: `scale(${elementsSizeUnit / 330})` }}></input>
}

export default Checkbox;