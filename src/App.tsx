import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import { RouterBuilder } from './routes';
import { CombineProviders } from './ui/components';

function App() {
  return (
    <div className="App">
      <div className="App__div">
        <CombineProviders>
          <Switch>
            <RouterBuilder />
          </Switch>
        </CombineProviders>
      </div>
    </div>
  );
}

export default App;
