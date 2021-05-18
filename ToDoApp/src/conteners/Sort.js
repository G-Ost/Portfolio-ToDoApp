import { useContext } from "react";
import { TaskListReducerContext } from "../contexts/taskListReducerContext"


function Sort(props) {
    let { dispatch, elementsSizeUnit } = useContext(TaskListReducerContext);
    function selectHandler(e) {
        dispatch({ type: "FILTER", payload: e.target.value })
    }

    return (
        <div className={"sortingSection"} style={{ width: elementsSizeUnit, }}>
            <label id="containerLabel" style={{ fontSize: elementsSizeUnit / 12.5, height: elementsSizeUnit / 5, width: elementsSizeUnit * 1.5 }}>Sort by: <br />
                <select id="optionContainer" name="condition" onChange={selectHandler} style={{ fontSize: elementsSizeUnit / 18, width: elementsSizeUnit * 0.5, height: elementsSizeUnit / 11 }}>
                    <option defaultValue="All" value="All"> All </option>
                    <option value="Done"> Done</option>
                    <option value="Undone"> Undone</option>
                </select>
            </label>
        </div >
    )
}

export default Sort;