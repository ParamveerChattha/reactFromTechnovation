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
    this.state={
              val1 : '',
              val2 : '',
              result: ''
    }
    this.addTwo = this.addTwo.bind(this);
    this.handleInput1 = this.handleInput1.bind(this);
    this.handleInput2 = this.handleInput2.bind(this);
  }

  render(){
    return(
    <div>
    <form onSubmit={this.addTwo}>
        <label style = {style.label}>value 1 </label>
        <input type= "Text" value= {this.state.val1} onChange={(event) => {this.handleInput1(event.target.value)}}/>
        <label style = {style.label}> value 2 </label>
          <input type= "Text" value = {this.state.val2} onChange= {(event) => {this.handleInput2(event.target.value)}}/>
      <button type="button" onClick={this.addTwo} > Add </button>

      {this.state.val1}
      {this.state.val2}
       <label> {this.state.result} </label>

       </form>
    </div>
  );
  }

  handleInput1(value){
    this.setState({val1: value});
  }
  handleInput2(value){
    this.setState({val2: value});
  }
  addTwo(){
    let a = parseInt(this.state.val1)+ parseInt(this.state.val2);
    this.setState({result: a});
  }


}
export default Add;
