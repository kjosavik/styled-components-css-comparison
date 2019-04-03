import React from 'react';
import styled from 'styled-components';

export default class WithStyledComponents extends React.Component{
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
      <Main>

        <OutputArea>
          <Output>{this.state.displayedValue}</Output>
        </OutputArea>
        
        <InputArea>
          <Input onChange={this.updateValue} value={this.state.value} />
          <Button onClick={this.updateDisplayedValue}>Update output</Button>
        </InputArea>
       
      </Main>
    )
  }
}
const Main = styled.div`
  padding: ${props => props.theme.size.m};
  border: outset ${props => props.theme.color.orange} 1px;
  border-radius: 4px;
`;

const OutputArea = styled.div`
  min-height: ${props => props.theme.size.xl};
  margin: ${props => props.theme.size.s};
  cursor: default;
`;

const Output = styled.div`
  font-size: ${props => props.theme.size.l};
  color: ${props => props.theme.color.orange};
`;

const InputArea = styled.div`
  display: flex;
  & > * {
    margin: ${props => props.theme.size.s};
  }
`;

const Input = styled.input`
  font-size: ${props => props.theme.size.m};
  border: inset ${props => props.theme.color.orange} 1px;
  border-radius: 4px;
  padding: 2px;
`;

const Button = styled.button`
  background-color: ${props => props.theme.color.yellow};
  border: outset ${props => props.theme.color.orange} 1px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s;
  :hover {
    background-color: ${props => props.theme.color.orange};
    border-color: ${props => props.theme.color.yellow};
    border-style: inset;
  }
  :active {
    background-color: ${props => props.theme.color.blue};
    border: inset ${props => props.theme.color.turquoise} 1px;
    transition: none;
  }
`;