import React from 'react'

import Item from './Item/Item.component'

class ItemsList extends React.Component {
  
  render() {
    return (
      <div className="items-list">
        <Item/>  
      </div>
    );
  }
}

export default ItemsList;
