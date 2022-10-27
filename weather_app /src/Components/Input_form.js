import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './styleComponent.css';
import React from "react";


export class UserInput extends React.Component {

  constructor(props) {
  super(props);
    this.state = {
      value: '',
      formSubmit:false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    
    this.setState({value: event.target.value});
    
  }

  handleSubmit(event) {

    console.log(this.state.value)
    event.preventDefault();
    this.setState({formSubmit: true})

  }

  render() {

    let address = this.state.value;
    return (

      <div>
      <form onSubmit={this.handleSubmit}>

        <label>
          
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">Enter your address:</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={this.handleChange}/>
          </div>
        
        </label>

        <Link to={"/location?address=" + address}>
          <button type="submit" className="btn btn-success btn-lg">Submit</button>
        </Link>
    
      </form>
    </div>
    );
  }
}
