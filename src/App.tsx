import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import { RouterBuilder } from './routes';

function App() {
  return (
    <div className="App">
      <div className="App__div">
        <Switch>
          <RouterBuilder />
        </Switch>
      </div>
    </div>
  );
}

export default App;
