import React, { Component } from 'react';
import InputData from './containers/InputData/InputData';
import {BrowserRouter,Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <div className="App">
        <Route path="/" component={InputData} exact/>
       
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
