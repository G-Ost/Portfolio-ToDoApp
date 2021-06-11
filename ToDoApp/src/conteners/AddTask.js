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
            <input id="taskInput" style={{ fontSize: elementsSizeUnit / 18, border:"none", flex:"0.8",color:"#1868ae" }} type="text" value={state.formTask} onChange={handleChange} />
            <Button clickFunction={handleSubmit} isRemove={false} ></Button>
            </>
    )
}

export default AddTask;