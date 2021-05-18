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

    return (
        <>
            <label id="inputLabel" style={{ left: elementsSizeUnit / 6, fontSize: elementsSizeUnit / 12.5, height: elementsSizeUnit / 5, width: elementsSizeUnit * 1.5 }}>
                Add new task: <br />
                <input id="taskInput" style={{ fontSize: elementsSizeUnit / 18, width: elementsSizeUnit * 1.3, height: elementsSizeUnit / 13 }} type="text" value={state.formTask} onChange={handleChange} />
                <Button clickFunction={handleSubmit} isRemove={false} title="+" ></Button>
            </label>
        </>
    )
}

export default AddTask;