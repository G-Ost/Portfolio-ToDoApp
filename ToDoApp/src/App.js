import React, { useState, useEffect, useContext, useMemo } from "react";
import './App.css';
import AddTask from "./conteners/AddTask";
import Sort from "./conteners/Sort";
import TaskList from "./conteners/TaskList";
import { TaskListReducerContext } from "./contexts/taskListReducerContext";
import { authContext } from "./contexts/AuthProviderContext";
import { Redirect } from "react-router-dom";
import logoutImage from "./Images/logout.png";
import hoverLogoutImage from "./Images/hover.png";

function useFetch(url) {
  const [externalData, setExternalData] = useState([]);

  useMemo(
    () => {
      let isMounted = true;

      async function fetchData() {
        let info = await fetch(url);
        let response = await info.json();
        setExternalData(response);
      };
      if (isMounted) {
        fetchData();
      }
      return () => { isMounted = false }
    }, [url]
  )
  return externalData;
}



function App(props) {
  let { state, dispatch, storageKey, elementsSizeUnit } = useContext(TaskListReducerContext);
  const { isLogged, signOut } = useContext(authContext);

  let externalData = useFetch("https://jsonplaceholder.typicode.com/users/1/todos");

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify([...state.tasks]));
  }, [state.tasks, storageKey]);

  useEffect(() => {
    dispatch({ type: "JOIN_EXTERNAL_DATA", externalData: externalData })
  }, [externalData, dispatch])
  let appHeight = (elementsSizeUnit / 3);


  if (!isLogged) {
    return (<Redirect to={{ pathname: "/login" }} />)
  }

  return (
    <div className="appContainer" style={{ position: "absolute", width: "100%", height: appHeight }}>
      <span style={{ position: "relative", display: "inline-flex", height: appHeight, width: "100%", background: "rgb(50,200,255)" }}>
        <AddTask />
        <Sort />
        <img alt="logoutButton" onMouseOver={e => (e.currentTarget.src = hoverLogoutImage)} onMouseOut={e => (e.currentTarget.src = logoutImage)} style={{ height: appHeight / 3, top: appHeight / 3.5, right: elementsSizeUnit / 10, position: "absolute" }} src={logoutImage} onClick={() => { signOut() }}></img>
      </span>
      <TaskList />
    </div>
  )
}

export default App;





