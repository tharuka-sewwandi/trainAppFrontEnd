import React,{Component} from 'react';
import axios from 'axios';

class mobile extends Component{

    CreditPayment=(e)=>{
    e.preventDefault();

        
        const recipient=this.refs.recipient.value;
        const amount=this.refs.amount.value;
        const textmessage="Rs"+amount+".00 has been deducted from your bank account";

        

        axios.post(`http://localhost:3000/sms/?recipient=${recipient}&textmessage=${textmessage}`)
        .catch(err=>{console.error(err)})

        console.log("successfully sent");
    }
    
    render(){
        return(
            <div>
                <h1 className="hd">Do payments from Your Mobile</h1>
                <form>
                 <fieldset>
                 <div class="form-group">
     Contact Number
      <input type="text" class="form-control" placeholder="Enter Mobile Phone Number without +94" ref="recipient"/>
                 </div>
                 <div class="form-group">
      Four Digit Pin
      <input type="text" class="form-control" placeholder="Enter Four Digit Pin"/>
                 </div>
                 <div class="form-group">
      Amount
      <input type="text" class="form-control" placeholder="Amount" ref="amount"/>
                 </div>
                 <div class="form-group">
                 <button type="button" className="btn btn-primary" onClick={this.CreditPayment.bind(this)} >Confirm Payments</button>
                 </div>
                 </fieldset>
                </form>
            </div>
        )
    }
}

export default mobile;