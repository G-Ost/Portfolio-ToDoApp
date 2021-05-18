import TaskRow from "./TaskRow"
import { useContext } from "react";
import { TaskListReducerContext } from "../contexts/taskListReducerContext"
function TaskList() {
    let { state, elementsSizeUnit } = useContext(TaskListReducerContext);
    let tasks = state.tasks
    let filterCondition = state.filterCondition
    return (
        <>
            <div className="tasks" style={{ left: elementsSizeUnit / 10 }}>
                {tasks.map((task, index) => {
                    if (filterCondition === "All" || task.completed === filterCondition) {
                        return (
                            <TaskRow key={index} task={task} index={index} ></TaskRow>
                        )
                    }
                })}
            </div>

        </>
    )
}


export default TaskList;