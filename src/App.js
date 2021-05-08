import React, { Component } from 'react';
import Main from './Components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/ConfigureStore'
import { Provider } from 'react-redux';
import Loading from './Components/Loading'
const Store = ConfigureStore()

class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
            <Loading />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
