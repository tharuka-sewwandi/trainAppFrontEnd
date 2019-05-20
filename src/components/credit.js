import React,{Component} from 'react';
import axios from 'axios';

class credit extends Component{

    CreditPayment=()=>{
        console.log("confirm payments");
        var name =this.refs.name.value;
        var email=this.refs.email.value;
        var creditCard=this.refs.creditCard.value;
        var telephone=this.refs.telephone.value;
        var amount=this.refs.amount.value;
        var message="Rs"+amount+".00 has been deducted from your credit card"+ creditCard+". Thanks for using trainBook application"
        console.log(name);
        console.log(email);
        console.log(message);

        axios.post('http://localhost:3000/email/',{
                    name: name,
                    email: email,
                    message:message,
                    telephone:telephone
        },{headers:{'Accept':'application/json'}})
        .then(function (response) {
            console.log('successfully added data');
            console.log(response);
          })
        .catch(function (error) {
            console.log(error);
          });

          console.log("message sent successfully")
        
        
    }
    render(){
        return(
            <div>
                <h1 className="hd">Do payments from Your Credit Card</h1>
                <form>
                 <fieldset>
                 <div class="form-group">
      Amount
      <input type="text" class="form-control" placeholder="Enter Amount" ref="amount"/>
                 </div>
                 <div class="form-group">
      Credit Card Number
      <input type="text" class="form-control" placeholder="Enter credit card number" ref="creditCard"/>
                 </div>
                 <div class="form-group">
      CVC Number
      <input type="text" class="form-control" placeholder="Enter CVC Number"/>
                 </div>
                 <div class="form-group">
      Card Holder Name
      <input type="text" class="form-control" placeholder="Enter Card Holder Name" ref="name"/>
                 </div>
                 <div class="form-group">
      Email
      <input type="text" class="form-control" placeholder="Enter Email Address" ref="email"/>
                 </div>
                 <div class="form-group">
      Contact Number
      <input type="text" class="form-control" placeholder="Enter Email Address" ref="telephone"/>
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

export default credit;