import React,{Component} from 'react';
import axios from 'axios';

class Search extends Component{
  
  getKey(e){
    e.preventDefault();
   //const keyTyped=this.refs.inputWord.value;
   
   axios.get('http://localhost:3000/product/').then(res =>console.log(res.data));
  }

  postreq(e){
    e.preventDefault();
    console.log("post");
    axios.post('/http://localhost:3000/product/', {
      name: 'Fred',
      price: '4578'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    
  render() {

        return(
          
            <form>
  <fieldset>
    <legend>View train Details</legend>

    <div className="form-group">
      
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter train name" ref="inputWord"/>
      <button type="button" className="btn btn-primary" onClick={this.getKey.bind(this)}>search</button>
      <button type="button" className="btn btn-primary" onClick={this.postreq.bind(this)}>post</button>
      
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    </fieldset>
    </form>
   
     
    
    
   
   
    
    
    
        )
    }
}

export default Search;