import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import AppTest from './AppTest';
import reportWebVitals from './reportWebVitals';
import { TaskListReducerContextProvider } from "./contexts/taskListReducerContext"
import { AuthProviderContext } from "./contexts/AuthProviderContext"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PublicPage from "./components/PublicPage";
import ToDo from "./components/ToDo"
import ErrorPage from "./components/ErrorPage"



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <AuthProviderContext>
        <TaskListReducerContextProvider>
          <Switch>
            <Route path="/todo">
              <App />
            </Route>
            <Route path="/todos/:id">
              <ToDo></ToDo>
            </Route>
            <Route exact path={["/login", "/"]}>
              <PublicPage />
            </Route>
            <Route path="/*">
              <ErrorPage />
            </Route>
          </Switch>
        </TaskListReducerContextProvider>
      </AuthProviderContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

