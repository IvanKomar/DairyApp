import React from 'react'

import CreateItem from './CreateItem/CreateItem.component'
import ItemsList from './ItemsList/ItemsList.component'
import './Items.component.css'

class Items extends React.Component {
  
  render() {
    return (
      <div className="items-content">
        <h2 className='items-header'>Items</h2>
        <CreateItem/>
        <ItemsList/>
      </div>
    );
  }
}

export default Items;
