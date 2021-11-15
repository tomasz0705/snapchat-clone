import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import { useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Switch>
              <Route path="/chats/view">
                <ChatView />
              </Route>
              <Route path="/chats">
                <Chats />
              </Route>
              <Route path="/preview">
                <Preview />
              </Route>
              <Route exact path="/">
                <WebcamCapture />
              </Route>
            </Switch>
        </div>
        )}

      </Router>
    </div>
  );
}

export default App;
