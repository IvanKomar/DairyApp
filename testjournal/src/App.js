import React from 'react'
import './App.css'
import Items from './Components/Item.component'
import Comments from './Components/Comments.component'
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      item: {
        comments: []
      }
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Let's get started</h1>
        <Items/>
        <Comments/>
      </div>
    );
  }
}

export default App;
