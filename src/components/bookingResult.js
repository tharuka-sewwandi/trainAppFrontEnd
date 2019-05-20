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
        <div><br/></div>

          <div className="bookingResults">
        <tr  >
             <td className="table-secondary">Train name</td>
              <td className="table-danger">{trainInfo.tname}</td>
        </tr>
        <tr >
        <td className="table-secondary">User nic</td>
              <td className="table-danger">{trainInfo.nic}</td>
        </tr>
        <tr>
              <td className="table-secondary">Number of tickets</td>
              <td className="table-danger">{trainInfo.not}</td>
              </tr>
              <tr>
              <td className="table-secondary">Employee Type</td>
              <td className="table-danger">{trainInfo.empType}</td>
              </tr>
              <tr>
              <td className="table-secondary">First Price</td>
              <td className="table-danger">{trainInfo.firstPrice}</td>
              </tr>
              <tr>
              <td className="table-secondary">Discounted Price</td>
              <td className="table-danger">{trainInfo.disountedPrice}</td>
              </tr>
        </div>
        </div>
      )
    });
        return(
          
            <form>
  <fieldset>
    

    <div className="form-group">
      
      
      <button type="button"  className="btn btn-warning btn-block"  onClick={this.posrBooking.bind(this)}>Show booking results</button>
     
      
      
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