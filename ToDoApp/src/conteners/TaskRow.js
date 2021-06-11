import { useContext } from "react";
import Button from "../components/Button";
import { TaskListReducerContext } from "../contexts/taskListReducerContext"
import Checkbox from "../components/Checkbox";
import { Link } from "react-router-dom"

function TaskRow(props) {
    let { state, dispatch, elementsSizeUnit } = useContext(TaskListReducerContext);


    function delButtonHandler(buttonIndex) {
        dispatch({ type: "DELETE", buttonIndex: buttonIndex })
    }

    function checkboxHandler(index) {
        dispatch({ type: "CHECKBOX", checkboxIndex: index, payload: state.tasks[index].completed })
    }

    let taskIndex = (props.index + 1 + ". ");

    return (
        <li className={"task"} id={"task" + props.index} style={{backgroundColor:"white",marginTop:"1%",height:elementsSizeUnit/12, width:"110%"}} >
            <Checkbox onClickBox={() => checkboxHandler(props.index)} isChecked={state.tasks[props.index].completed}></Checkbox>
      &nbsp;
            <Link className="links" to={`/todos/${props.task.id}`}>
                <span style={{ fontSize: elementsSizeUnit / 18, marginLeft:"1%" }}>
                <b>{taskIndex}</b>{props.task.title}
            </span></Link>
  &nbsp;
            <Button clickFunction={() => delButtonHandler(props.index)} isRemove={true} title="X"></Button>
        </li>)
}

export default TaskRow;