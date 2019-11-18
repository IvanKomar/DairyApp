import React from 'react'
import './App.css'
import Home from './Components/Home.component'
import { Provider } from 'react-redux'
import store from './Store'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store} >
          <Home/>
        </Provider>
      </div>
    );
  }
}

export default App;
