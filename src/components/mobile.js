import React,{Component} from 'react';

class mobile extends Component{
    render(){
        return(
            <div>
                <h1>Do payments from Your Mobile</h1>
                <form>
                 <fieldset>
                 <div class="form-group">
      Mobile Phone Number
      <input type="text" class="form-control" placeholder="Enter Mobile Phone Number"/>
                 </div>
                 <div class="form-group">
      Four Digit Pin
      <input type="text" class="form-control" placeholder="Enter Four Digit Pin"/>
                 </div>
                 <div class="form-group">
      Amount
      <input type="text" class="form-control" placeholder="Amount"/>
                 </div>
                 </fieldset>
                </form>
            </div>
        )
    }
}

export default mobile;