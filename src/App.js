import React,{Component} from 'react';
import Search from './components/Search';
//import Trainresult from './components/Trainresult';
import Book from './components/bookTrain';
import BookingResult from './components/bookingResult';
import Payment from './components/payment';
import Train2 from './images/train2.jpg';
//import Train from './images/train.jpg';

import './App.css';
import './bootstrap.min.css';

class App extends Component{



render(){
  return (
    
      <div className="container">
        <div className="row">
          <div className="headarround">
        <h1 className="heading">Book Train</h1>
        </div>
        </div>
      <div className="row">
      <div className="col-md-12">
      <img src={Train2}  alt="Train2" width="100%" height="400px"/>;
        </div>
       
        </div>
        <div className="row"> <br/></div>

        
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
