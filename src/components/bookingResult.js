import React,{Component} from 'react';
import axios from 'axios';
//import submitDetails from './bookTrain'
class bookingResult extends Component{
    state = {
        trainInfo: []
    }
    posrBooking() {
        axios.get('http://localhost:3000/bookResults/').then((response) => {
            this.setState({
                
                trainInfo: response.data.train
               
            })
            //console.log(trainInfo);
            console.log(response.data.train[0]);
            
            
        });
        
    }
    render(){
       let trainInfo = this.state.trainInfo.map((trainInfo) => {
      console.log('train name : ',trainInfo.name)
      return(
          <div>
        <tr >
             <td>Train name</td>
              <td>{trainInfo.tname}</td>
        </tr>
        <tr >
        <td>User nic</td>
              <td>{trainInfo.nic}</td>
        </tr>
        <tr>
              <td>Number of tickets</td>
              <td>{trainInfo.not}</td>
              </tr>
              <tr>
              <td>Employee Type</td>
              <td>{trainInfo.empType}</td>
              </tr>
              <tr>
              <td>First Price</td>
              <td>{trainInfo.firstPrice}</td>
              </tr>
              <tr>
              <td>Discounted Price</td>
              <td>{trainInfo.disountedPrice}</td>
              </tr>
        </div>
      )
    });
        return(
          
            <form>
  <fieldset>
    

    <div className="form-group">
      
      
      <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.posrBooking.bind(this)}>Show booking results</button>
     
      
      
      <div>
     
                <table className="table table-hover">
                    
                    <tbody>
                        {trainInfo}
                    </tbody>
                </table>
      </div>
    </div>
    </fieldset>
    </form>
   
     
    
    
   
   
    
    
    
        );
    }
}
export default bookingResult;