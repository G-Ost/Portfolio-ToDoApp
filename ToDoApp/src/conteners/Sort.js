import { useContext } from "react";
import { TaskListReducerContext } from "../contexts/taskListReducerContext"


function Sort(props) {
    let { dispatch, elementsSizeUnit } = useContext(TaskListReducerContext);
    function selectHandler(e) {
        dispatch({ type: "FILTER", payload: e.target.value })
    }
    let divStyle = { display: "flex", position: "relative", top: elementsSizeUnit / 10, left: elementsSizeUnit / 6, fontSize: elementsSizeUnit / 12.5, height: "100%", width: "auto", marginRight: elementsSizeUnit / 2 };
    return (
        <div style={divStyle}>
            <label id="containerLabel" />Sort by:&nbsp;
            <select id="optionContainer" name="condition" onChange={selectHandler} style={{ fontSize: elementsSizeUnit / 18, width: elementsSizeUnit * 0.5, height: elementsSizeUnit / 9 }}>
                <option defaultValue="All" value="All"> All </option>
                <option value="Done"> Done</option>
                <option value="Undone"> Undone</option>
            </select>

        </div>

    )
}

export default Sort;