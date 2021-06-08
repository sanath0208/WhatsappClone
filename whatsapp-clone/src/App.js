import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Login from './Login'

function App() {

  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {!user ? (<Login />) : 
      (
      <div className='app_body'>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/rooms/:roomId">
            <Chat />
          </Route>
        </Switch>
      </Router>
      </div> )}
    </div>
  );
}

export default App;
