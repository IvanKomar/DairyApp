import React from 'react'
import './App.css'
import Items from './Components/Item.component'
import Comments from './Components/Comments.component'
import LeftSide from './Components/LeftSide.component'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <LeftSide  />
        <Items handleChange={this.handleChange} />
        <Comments/>
      </div>
    );
  }
}

export default App;
