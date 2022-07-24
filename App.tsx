import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import ShowData from './Components/ShowList';
import ExpenseTracker from './Components/ExpenseTracker';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/add" component={ExpenseTracker}></Route>
        <Route path="/" component={ShowData}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
