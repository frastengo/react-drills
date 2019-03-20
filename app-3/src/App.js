import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: ["ice cream", "peanut butter", "cookie dough", "cheese", "chocolate"],
      inputText: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this)


  }

  handleInputChange(event){
    this.setState ({
      inputText: event.target.value
    })
  }


  render() {
    let filtered = this.state.data.filter((element, index)=> {
      return element.startsWith(this.state.inputText)
    })
    
    console.log(filtered)

    let list = filtered.map((element,index)=> {
      return <h2 key={index}>{element}</h2>
    })

    // let inputText = event.target.value;
    // let list = inputText.filter(function(element, index) {
    //   if (inputText.startsWith(element) === 'true') {
    //     return <h2>{inputText}</h2>
    //   }
    //   }


    return (
      <div className="App">
        <input
          onChange={this.handleInputChange} 
          />
        <span>{list}</span>
      </div>
    );
  }
}

export default App;
