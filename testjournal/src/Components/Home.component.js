import React from 'react'
import Items from './Item.component'
import Comments from './Comments.component'
import LeftSide from './LeftSide.component'

class Home extends React.Component {
  
  render() {
    return (
      <div className="App">
        <LeftSide  />
        <Items />
        <Comments/>
      </div>
    );
  }
}

export default Home;
