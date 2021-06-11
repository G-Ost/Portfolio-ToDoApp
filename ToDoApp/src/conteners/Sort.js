import { useContext } from "react";
import { TaskListReducerContext } from "../contexts/taskListReducerContext"


function Sort(props) {
    let { dispatch, elementsSizeUnit } = useContext(TaskListReducerContext);
    function selectHandler(e) {
        dispatch({ type: "FILTER", payload: e.target.value })
    }

    return (
            <select id="optionContainer" name="condition" onChange={selectHandler} style={{ fontSize: elementsSizeUnit / 18,border:"none", flex:"0.3" }}>
                <option defaultValue="All" value="All"> All </option>
                <option value="Done"> Done</option>
                <option value="Undone"> Undone</option>
            </select>
    )
}

export default Sort;