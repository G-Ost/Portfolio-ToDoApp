import * as React from 'react';
import { useParams } from "react-router-dom"
import { TaskListReducerContext } from "../contexts/taskListReducerContext";


function ToDo(props) {
    let { state } = React.useContext(TaskListReducerContext);
    const { id } = useParams();
    const taskTitle = state.tasks.find((task) => task.id === id);
    return (
        <div>
            <h2>{taskTitle ? taskTitle.title : "Task was deleted."}</h2>
        </div>
    )
}

export default ToDo;