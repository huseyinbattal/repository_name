import React, { Component } from "react";

export default class StateSampleComp extends Component {


  state = { name: "Tommy", age: 21, count: 0 };
  
  render() {
    const changedFunc = () => {
      this.setState({count:1,name:"Changed Tommy"+Math.floor(Math.random()*4)})
 }
    let surname = "XXX YYY";
    return (
      <div>
        StateSampleComp
        <hr />
        Name: {this.state.name}
        <br/>
        Age: {this.state.age}- Surname:{surname}
        <hr />
        Count:{this.state.count}
        <br />
        <button onClick={changedFunc}>+</button>
      </div>
    );
  }
}
