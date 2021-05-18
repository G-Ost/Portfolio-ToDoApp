import React, { useState, useEffect, useMemo } from "react";
import './App.css';
import AddTask from "./conteners/AddTask"
import Sort from "./conteners/Sort"
import TaskList from "./conteners/TaskList"
import { useContext } from "react";
import { TaskListReducerContext } from "./contexts/taskListReducerContext"



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



function App() {
  let { state, dispatch, storageKey, elementsSizeUnit } = useContext(TaskListReducerContext);

  let externalData = useFetch("https://jsonplaceholder.typicode.com/users/1/todos");

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify([...state.tasks]));
  }, [state.tasks, storageKey]);

  useMemo(() => {
    dispatch({ type: "JOIN_EXTERNAL_DATA", externalData: externalData })
  }, [externalData, dispatch])

  let appHeight = (elementsSizeUnit / 3);

  return (
    <div className="appContainer" style={{ width: elementsSizeUnit * 3, height: appHeight }}>
      <span style={{ display: "flex", justifyContent: "space-between", height: appHeight, width: window.innerWidth, background: "rgb(50,200,255)" }}>
        <AddTask />
        <Sort />
      </span>
      <TaskList />
    </div>
  )
}

export default App;





