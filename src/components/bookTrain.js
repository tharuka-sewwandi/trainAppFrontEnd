import React,{Component} from 'react';
import axios from 'axios';
//import BookingResult from './bookingResult';

class bookTrain extends Component{

    state = {
        newOrderData: {
            nic:'',
            tname:'',
            numOfTickets: '',
            username:''
        },

        newOrders:[]
    }
    //export const plusSlides = (n)=>
      submitDetails=(e)=>{
        e.preventDefault();
console.log("submited");
const nic=this.refs.inputNIC.value;
const trainn = this.refs.inputTname.value;
const qty = this.refs.inputQTY.value;
const unm= this.refs.uname.value


console.log(nic);
console.log("trainn is",trainn);
console.log(qty);
console.log(unm);
        axios.get('http://localhost:3000/trains/',{headers: {'Content-Type': 'application/json'}}).then(response => {
           
            // this.setState({
            //     newOrders:response.data.train
            // });

            console.log(response.data);
            console.log(response.data.train);
            
            var trn=[]
             trn=response.data.train
            //console.log(trn[0].arriveStation);
            
            var i;
            var pricee;
            var totalPrice;
            for( i=0;i<trn.length;i++)
            {
                //console.log(trn[i].name);
                //console.log("trainn is ",trainn)
                console.log("loop",trn[i].name)
                if(trn[i].name===trainn){
                    console.log("inside if")
                    console.log("train is ",trn[i].name)
                    //i=i;
                   
                    break;   
                 
                }
                else{
                    console.log("not matched");
                }
            }

            console.log("final train is",trn[i].name);
            pricee=trn[i].price;
            console.log(pricee);
            totalPrice=pricee*qty;
            console.log(totalPrice);
            console.log(unm);

            var niCard=[];
            var empType="Non Government";
            // axios.get('http://localhost:3000/govs/nic/'+nic+'/',{headers: {'Content-Type': 'application/json'}}).then(response => {
            //     const dataa=response.data
                  
            //     // }
            //     // else {
            //     //     const govnic= dataa.result.nic;
            //     //     console.log("nic is ",govnic);
            //     // }

            //     const govnic= dataa.result.nic;
            //     console.log("nic is ",govnic);

            // });

            
            axios.get('http://localhost:3000/govs/nic/',{headers: {'Content-Type': 'application/json'}}).then(response => {
                const dataa=response.data
                
                niCard=dataa.result;
               var i;
                for(i=0;i<niCard.length;i++){
                    console.log(niCard[i].nic);
                    if(niCard[i].nic===nic)
                    {console.log("matched");
                    empType="Government"
                    break;
                    }
                    else{console.log(" not matched");}
                }
                console.log('i is ',i);
                console.log(empType);
            });



        });
   


    }

render(){
  
    
    return(
        <div>
            {
        this.state.newOrders.map((dynamicData,key)=>
        <div>
            <span>{dynamicData.tname}</span>
            </div>)
            }
            
        <form>
  <fieldset>
  <div class="form-group">
      <label >Name</label>
      <input type="ematextil" class="form-control" value={this.state.newOrderData.username} placeholder="Enter Your name" ref="uname" onChange={(e) => {
                                let {newOrderData} = this.state;
                                newOrderData.username = e.target.value;
                                this.setState({newOrderData})
                               
                            }} />
      </div>
  <div class="form-group">
      <label >NIC</label>
      <input type="ematextil" class="form-control" value={this.state.newOrderData.nic} placeholder="Enter NIC number" ref="inputNIC" onChange={(e) => {
                                let {newOrderData} = this.state;
                                newOrderData.nic = e.target.value;
                                this.setState({newOrderData})
                               
                            }} />
      </div>
      <div class="form-group">
      <label >Train Name</label>
      <input type="text" class="form-control" value={this.state.newOrderData.tname} placeholder="Train Name" ref="inputTname" onChange={(e) => {
                                let {newOrderData} = this.state;
                                newOrderData.tname = e.target.value;
                                this.setState({newOrderData})
                                
                            }}/>
      </div>
      <div class="form-group">
      <label >Number Of Tickets</label>
      <input type="email" class="form-control" value={this.state.newOrderData.numOfTickets} placeholder="Enter number of tickets" ref="inputQTY" onChange={(e) => {
                                let {newOrderData} = this.state;
                                newOrderData.numOfTickets = e.target.value;
                                this.setState({newOrderData})
                                
                            }}/>

    </div>
    <button type="submit" class="btn btn-primary" onClick={this.submitDetails.bind(this)}>Submit</button>
  </fieldset>
  </form>
  </div>
        
        
    )
}
}
export default bookTrain;