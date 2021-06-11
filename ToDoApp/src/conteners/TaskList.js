import TaskRow from "./TaskRow"
import { useContext } from "react";
import { TaskListReducerContext } from "../contexts/taskListReducerContext"
function TaskList() {
    let { state } = useContext(TaskListReducerContext);
    let tasks = state.tasks
    let filterCondition = state.filterCondition
    return (
            <ul className="tasks" style={{listStyleType:"none",width:"max-content",textAlign:"left",marginTop:"2%"}}>
                {tasks.map((task, index) => {
                    if (filterCondition === "All" || task.completed === filterCondition) {
                        return (
                            <TaskRow key={index} task={task} index={index} ></TaskRow>
                        )
                    }
                    else return false;
                })}
            </ul>

    )
}


export default TaskList;