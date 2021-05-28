import { useContext } from "react";
import Button from "../components/Button";
import { TaskListReducerContext } from "../contexts/taskListReducerContext"
function AddTask(props) {
    let { state, dispatch, storageKey, elementsSizeUnit } = useContext(TaskListReducerContext);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: "SUBMIT", key: storageKey })
    }

    function handleChange(e) {
        dispatch({ type: "FIELD", payload: e.target.value })
    }

    let divStyle = { display: "flex", position: "relative", left: elementsSizeUnit / 6, fontSize: elementsSizeUnit / 12.5, top: elementsSizeUnit / 10, height: "100%", width: "auto", marginRight: elementsSizeUnit / 2 };
    return (
        <div style={divStyle}>
            <label id="inputLabel" style={{ whiteSpace: "no-wrap" }} />
                Add new task: &nbsp;
            <input id="taskInput" style={{ fontSize: elementsSizeUnit / 18, width: elementsSizeUnit * 0.5, height: elementsSizeUnit / 11 }} type="text" value={state.formTask} onChange={handleChange} />
            <Button clickFunction={handleSubmit} isRemove={false} title="+" ></Button>
        </div>
    )
}

export default AddTask;