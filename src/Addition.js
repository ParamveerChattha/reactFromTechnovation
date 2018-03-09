import React,{Component} from 'react';
const style={
  label:{
    leftMargin: 30,
    maxWidth: 10
  },
  input:{
    leftMargin: 30,
    maxWidth: 10
  }
}
class Add extends React.Component{
  constructor(props){
    super(props)
//creating the states for the project which are bound to the class
    this.state={
              val1 : '',
              val2 : '',
              result: ''
    }
//binding the methods
    this.addTwo = this.addTwo.bind(this);
    this.handleInput1 = this.handleInput1.bind(this);
    this.handleInput2 = this.handleInput2.bind(this);
  }
  render(){
    return(
    <div>
      <form>
        <label style = {style.label}> value 1 </label>
        <input type= "Text" value= {this.state.val1} onChange={(event) => {this.handleInput1(event.target.value)}}/>
        <label style = {style.label}> value 2 </label>
        <input type= "Text" value = {this.state.val2} onChange= {(event) => {this.handleInput2(event.target.value)}}/>
        <button type="button" onClick={this.addTwo} > Add </button>
        <label> {this.state.result} </label>
        </form>
    </div>
  );
  }
//called any time the value of the box1 is changed, as it is triggered on onChange
  handleInput1(value){
    this.setState({val1: value});
  }

//called any time the value of the box1 is changed, as it is triggered on onChange
  handleInput2(value){
    this.setState({val2: value});
  }
//function triggered when the add button is clicked
  addTwo(){
    let a;
    if(((this.state.val1)%1 !=0)||((this.state.val2)%1!=0)){
       a = "please enter the numbers";
    }
    else{
      a = parseInt(this.state.val1)+ parseInt(this.state.val2);
    }
    this.setState({result: a});
  }
}
export default Add;
