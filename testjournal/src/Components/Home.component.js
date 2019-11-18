import React from 'react'
import Items from './Item.component'
import Comments from './Comments.component'
import LeftSide from './LeftSide.component'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
   
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  handleSubmit = (event) => {
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

export default Home;
