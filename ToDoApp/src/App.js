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
      let isMounted = false;

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

  const spanStyle = {justifyContent:"center",alignItems:"center", flex:"1", display:"flex"};
  const labelStyle = {fontSize:elementsSizeUnit/18,color:"#1868ae",whiteSpace:"nowrap"};
  if (!isLogged) {
    return (<Redirect to={{ pathname: "/login" }} />)
  }

  return (
    <div className="appContainer" style={{ width: "100%",textAlign:"center"}}>
      <h1 style={{width:"100%", fontSize:elementsSizeUnit/7,textAlign:"center",color:"#1868ae"}}>ToDo (or not ToDo) List</h1>
      <form style={{ width: "50%",  alignItems:"center", display:"flex", justifyContent:"center", marginLeft:"28%" }}>
        <span style={spanStyle}>
        <label style={labelStyle}>Add new task:</label> &nbsp;&nbsp;
        <AddTask />
        </span>
        <span style={spanStyle}>
        <label style={labelStyle}>Sorting:</label>&nbsp;&nbsp;
        <Sort />
        </span>
        <span style={{flex:0.5}}>
        <img alt="logoutButton" onMouseOver={e => (e.currentTarget.src = hoverLogoutImage)} onMouseOut={e => (e.currentTarget.src = logoutImage)} style={{ height: elementsSizeUnit / 10}} src={logoutImage} onClick={() => { signOut() }}></img>
        </span>
      </form>
      <span style={{display:"flex", justifyContent:"center"}}>
      <TaskList />
      </span>
    </div>
  )
}

export default App;





