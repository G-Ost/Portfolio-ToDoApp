import React, { useState, useEffect, useMemo } from "react";
import './App.css';
import AddTask from "./conteners/AddTask"
import Sort from "./conteners/Sort"
import TaskList from "./conteners/TaskList"



function useLocalStorageState(key, defaultValue) {
  const [value, setValue] = useState(
    () => {
      const valueInLocalStorage = localStorage.getItem(key);
      if (valueInLocalStorage) {
        return JSON.parse(valueInLocalStorage)
      }
      return typeof defaultValue === "function" ? defaultValue() : defaultValue
    }

  );


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue]
}

function useFetch(url) {
  const [externalData, setExternalData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let info = await fetch(url);
      let response = await info.json();
      setExternalData(response);
    };
    fetchData();
  }, [url]
  )
  return externalData;
}


function taskListReducer(state, action) {
  switch (action.type) {
    case "JOIN_EXTERNAL_DATA":
      if (state.length === 0) {
        let modifiedData = action.externalData.map(task => {
          return {
            title: task.title,
            completed: task.completed,
            isDisplayable: "inline"
          }
        });
        return [...modifiedData];
      }

    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }

}



function App() {
  const [tasks, setTasks] = useLocalStorageState("toDoTaskList", []);
  const [formTask, setFormTask] = useState("")
  const [filterCondition, setFilterCondition] = useState("All")


  let externalData = useFetch("https://jsonplaceholder.typicode.com/users/1/todos");

  useMemo(() => {
    if (tasks.length === 0) {
      let modifiedData = externalData.map(task => {
        return {
          title: task.title,
          completed: task.completed,
          isDisplayable: "inline"
        }
      });
      setTasks([...modifiedData]);
    }
  }, [externalData])




  function handleSubmit(e) {
    let displayability = "inline";
    e.preventDefault();
    setTasks([...tasks, { title: formTask, completed: false, isDisplayable: displayability }]);
    setFormTask("");
  }

  function handleChange(e) {
    setFormTask(e.target.value)
  }




  function delButtonHandler(index) {
    let buttonNumber = index;
    let holderArray = tasks;
    holderArray.splice(buttonNumber, 1);
    setTasks([...holderArray]);

  }

  function checkboxHandler(index) {
    let boxNumber = index;
    let holderArray = [...tasks];
    if (holderArray[boxNumber].completed === true) {
      holderArray[boxNumber].completed = false
    }
    else {
      holderArray[boxNumber].completed = true
    }
    setTasks([...holderArray]);

  }


  function selectHandler(e) {
    let chosenCondition = e.target.value;
    if (chosenCondition === "All") {
      setFilterCondition("All")
    }
    else if (chosenCondition === "Done") {
      setFilterCondition(true);
    }
    else {
      setFilterCondition(false);
    }

  }



  return (
    <>
      <AddTask clickFunction={handleSubmit} changeFunction={handleChange} formTask={formTask} />
      <br></br>
      <Sort selectHandler={selectHandler} />
      <TaskList tasks={tasks} onClickBox={checkboxHandler} deleteButtonClick={delButtonHandler} filterCondition={filterCondition} />
    </>
  )
}

export default App;





