import { useContext } from "react";
import Button from "../components/Button";
import { TaskListReducerContext } from "../contexts/taskListReducerContext"
import Checkbox from "../components/Checkbox";


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
        <p className={"task"} id={"task" + props.index} >
            <Checkbox onClickBox={() => checkboxHandler(props.index)} isChecked={state.tasks[props.index].completed}></Checkbox>
      &nbsp;
            <span style={{ fontSize: elementsSizeUnit / 15 }}>
                <b>{taskIndex}</b>{props.task.title}
            </span>
  &nbsp;
            <Button clickFunction={() => delButtonHandler(props.index)} isRemove={true} title="X"></Button>
        </p>)
}

export default TaskRow;