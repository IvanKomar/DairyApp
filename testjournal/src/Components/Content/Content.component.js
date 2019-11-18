import React from 'react'

import Items from './Items/Items.component'
import Comments from './Comments/Comments.component'
import './Content.component.css'

class Home extends React.Component {
  
  render() {
    return (
      <div className="Content">
        <Items />
        <Comments/>
      </div>
    );
  }
}

export default Home;
