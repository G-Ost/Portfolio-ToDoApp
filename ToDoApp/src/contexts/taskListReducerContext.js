import React, { useReducer } from "react";
const TaskListReducerContext = React.createContext({});

function grabLocalStorage(key, defaultValue) {
    const valueInLocalStorage = localStorage.getItem(key);
    if (valueInLocalStorage !== null) {
        if (valueInLocalStorage.length > 0)
            return JSON.parse(valueInLocalStorage)
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue
}


function setTnitialState(args) {
    const [key, listDefaultValue] = args;
    return {
        tasks: grabLocalStorage(key, listDefaultValue),
        formTask: "",
        filterCondition: "All"
    }
}


function taskListReducer(state, action) {
    switch (action.type) {
        case "JOIN_EXTERNAL_DATA": {
            if (state.tasks.length === 0) {
                let modifiedData = action.externalData.map(task => {
                    return {
                        title: task.title,
                        completed: task.completed,
                        isDisplayable: "inline",
                        id: "task" + task.id
                    }
                });
                return { ...state, tasks: modifiedData };
            }
            return { ...state }
        }
        case "FIELD":
            return {
                ...state,
                formTask: action.payload
            }
        case "SUBMIT":
            {
                return {
                    ...state, tasks: [...state.tasks, { title: state.formTask, completed: false, isDisplayable: "inline", id: `Task${state.tasks.length + 1}` }], formTask: ""
                }
            }
        case "DELETE": {
            let holderArray = [...state.tasks];
            holderArray.splice(action.buttonIndex, 1)
            return {
                ...state, tasks: [...holderArray]
            }
        }
        case "CHECKBOX": {
            let holderArray = [...state.tasks];
            holderArray[action.checkboxIndex].completed = !action.payload;
            return {
                ...state, tasks: [...holderArray]
            }
        }
        case "FILTER": {
            let chosenCondition = action.payload;
            let filter;
            if (chosenCondition === "All") {
                filter = "All"
            }
            else if (chosenCondition === "Done") {
                filter = true
            }
            else {
                filter = false
            }
            return {
                ...state, filterCondition: filter
            }
        }

        default:
            return state;
    }

}




const TaskListReducerContextProvider = (props) => {
    let storageKey = "toDoTaskList";
    let elementsSizeUnit = window.innerHeight > window.innerWidth ? window.innerWidth / 2 : window.innerHeight / 2;
    const [state, dispatch] = useReducer(taskListReducer, [storageKey, []], setTnitialState)

    return (
        <TaskListReducerContext.Provider value={{ state, dispatch, storageKey, elementsSizeUnit }}>
            {props.children}
        </TaskListReducerContext.Provider>
    )
}

export { TaskListReducerContextProvider, TaskListReducerContext }