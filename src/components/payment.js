import React,{Component} from 'react';
import Mobilee from './mobile';
import Creditt from './credit' ;

class payment extends Component{

    constructor(props){
        super(props)
        this.state={creditPay:false,
                    mobilePay:false};

    this.creditPaymen=this.creditPaymen.bind(this)
    this.mobilePayment=this.mobilePayment.bind(this)
    }


    creditPaymen=()=>{
        
        const {creditPay}=this.state;
        this.setState({creditPay:!creditPay})
    }

    mobilePayment=()=>{
        const {mobilePay}= this.state;
        this.setState({mobilePay:!mobilePay})
    }
    render(){
        return(

            <form>
  <fieldset>
    
  <div className="row"><br/></div>
    <div className="form-group">
        
    <div className="row">
    <div className="col-md-2"></div>
    <div className="col-md-10">
    <div className="row">
    <div className="col-md-5">
            <button type="button" className="btn btn-info" onClick={this.creditPaymen.bind(this)} >Credit Payment</button>
            </div>
            <div className="col-md-5">
            <button type="button" className="btn btn-info" onClick={this.mobilePayment.bind(this)} >mobile Payment</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-2">
                </div>
                <div className="col-md-10">
                {this.state.creditPay && <Creditt/>}
                {this.state.mobilePay && <Mobilee/>}
                </div>
            </div >
            </fieldset>
            </form>
        )
    }
}
export default payment;
