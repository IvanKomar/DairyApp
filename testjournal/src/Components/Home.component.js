import React from 'react'
import Content from './Content/Content.component'
import Menu from './Menu/Menu.component'

class Home extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Menu />
        <Content />
      </div>
    );
  }
}

export default Home;
