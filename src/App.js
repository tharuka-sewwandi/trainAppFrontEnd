import React from 'react';
import Search from './components/Search';
import Trainresult from './components/Trainresult';
import Book from './components/book';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="row">
      <div className="col-md-7">
      <Search />
      
      </div>
      
      
      <div className="col-md-5">
      <Book />
      </div>
      </div>
      <div className="row">
      <div className="col-md-6">
      <Trainresult />
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
