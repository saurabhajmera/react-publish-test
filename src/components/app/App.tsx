import React from 'react';
import './App.scss';
import {MyButton} from "../my-button/MyButton";

const App: React.FC = () => {
  return (
    <div className="App">
        <h1>Hello!</h1>

      <span>See this button:</span><MyButton typeName='danger'/>
    </div>
  );
};

export default App;
