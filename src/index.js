import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route} from 'react-router-dom';
const style ={

}
class Index extends React.Component{

  render(){
    return(
      <div >
      <App />
      </div>
    )
  }
}
ReactDom.render(
  <HashRouter>
    <div>
    <Route path="/" component= {Index} />
    </div>
  </HashRouter>
,document.getElementById('root'));
registerServiceWorker();
