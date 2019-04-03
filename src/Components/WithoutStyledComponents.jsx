import React from 'react';
import '../assets/css/withoutStyledComponents.css'

export default class WithoutStyledComponents extends React.Component{
  constructor(props){
    const defaultOutput = "Change me...";

    super(props);
    this.state={
      value: defaultOutput,
      displayedValue: defaultOutput,
    }
  }

  updateValue = (e) => {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  updateDisplayedValue = () => {
    this.setState({displayedValue: this.state.value});
  }

  render(){
    return(
      <div id="main">

        <div id="output-area">
          <div id="output">{this.state.displayedValue}</div>
        </div>

        <div id="input-area">
          <input id="input" onChange={this.updateValue} value={this.state.value}/>
          <button id="button" onClick={this.updateDisplayedValue}>Update output</button>
        </div>

      </div>
    )
  }
}