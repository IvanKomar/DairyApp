import React from 'react'
import { connect } from 'react-redux'

import Item from './Item/Item.component'
import './ItemsList.component.css'

class ItemsList extends React.Component {
  
  render() {
    return (
      <div className="items">
        {
          this.props.items.map(item =>  <Item key={item.id} data={item} />  
          )
        }   
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
})

export default connect(mapStateToProps, {})(ItemsList)
