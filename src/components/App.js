import Display from "./Display"
import ButtonPanel from "./ButtonPanel"
import { Component } from "react";
import operations from "../logic/operations";
import "./css/app.css";


class App extends Component {

  state = {
    totalResult: null,
    after:null,
    operator:null
  }

  handleClick = buttonName => this.setState(operations(this.state, buttonName))

  render(){
    return (
      <div className="calculator-container">
        <Display value={this.state.after || this.state.totalResult || "0"}></Display>
        <ButtonPanel clickHandle={this.handleClick} />
      </div>
    );
  }
}

export default App;
