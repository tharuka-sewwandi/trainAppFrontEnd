import React,{Component} from 'react';
import axios from 'axios';


class Search extends Component{
  
  state = {
    trainInfo: []
}

  // getKey(e){
  //   e.preventDefault();
  // //const keyTyped=this.refs.inputWord.value;
  
  //  axios.get('http://localhost:3000/product/')
  //  .then(function(response) {
  //    //console.log(response.data.product),
  //    this.setState({
  //     trainInfo: response.data
  // })
     
  //  }
  //  )
   
  // }
  componentWillMount() {
    axios.get('http://localhost:3000/trains/').then((response) => {
        this.setState({
            trainInfo: response.data.train
        })
        
        
    });
    
}

  postreq(e){
    e.preventDefault();
    console.log("post");
    axios.post('http://localhost:3000/product/', {
      name: "hello",
      price: 4578
    }, {headers:{'Accept':'application/json'}})
    .then(function (response) {
      console.log('successfully added data');
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    
  render() {
    let trainInfo = this.state.trainInfo.map((trainInfo) => {
      console.log('train name : ',trainInfo.name)
      return(
        <tr className="table-primary" key={trainInfo.id}>
        <td>{trainInfo.name}</td>
        <td>{trainInfo.depatureStation}</td>
        <td>{trainInfo.depatureTime}</td>
        <td>{trainInfo.arriveStation}</td>
        <td>{trainInfo.arriveTime}</td>
        <td>{trainInfo.price}</td>
        </tr>
      )
    });
        return(
          
            <form>
  <fieldset>
    

    <div className="form-group">
      
      
      <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.componentWillMount.bind(this)}>search</button>
      <button type="button" className="btn btn-primary" onClick={this.postreq.bind(this)}>post</button>
      
      
      <div>
      <h2>Train Details</h2>
                <table className="table table-hover">
                    <thead>
                    <tr className="table-secondary">
                        <th scope="col">Name</th>
                        <th scope="col">Depature Station</th>
                        <th scope="col">Depature Time</th>
                        <th scope="col">Arrive Station</th>
                        <th scope="col">Arrive Time</th>
                        <th scope="col">Ticket Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainInfo}
                    </tbody>
                </table>
      </div>
    </div>
    </fieldset>
    </form>
   
     
    
    
   
   
    
    
    
        )
    }
}

export default Search;