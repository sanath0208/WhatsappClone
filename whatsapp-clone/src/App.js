import './App.css';
import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {useStateValue} from './StateProvider';


function App() {
  return (
    <div className="App">
      <div className='app_body'>
      <Router>
        <Switch>
          <Sidebar />
          <Chat />
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
