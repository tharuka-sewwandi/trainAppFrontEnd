import React,{Component} from 'react';
import Search from './components/Search';
//import Trainresult from './components/Trainresult';
import Book from './components/bookTrain';
import BookingResult from './components/bookingResult';
import Payment from './components/payment';

import './App.css';

class App extends Component{



render(){
  return (
    
      <div className="container">
      <div className="row">
      <div className="col-md-7">
      <Search/>
      
      </div>
      
      
      <div className="col-md-5">
      <Book />

      </div>
      </div>
      <div className="row">
      <div className="col-md-6">
     <BookingResult/>
      </div>
      <div className="col-md-6">
       <Payment/>
      </div>
      </div>
      </div>
    
  );
}
}

export default App;
