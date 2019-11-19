import React from 'react'
import { connect } from 'react-redux'

import IdGenerator from '../../../../RandomId/RandomId'
import './CreateItem.component.css'
import ItemActions from '../../../../Store/Actions/Item'
class CreateItemInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  createItem() {
    if (!this.state.value) return
    const item = {
      id: this.props.nextItemId,
      title: this.state.value,
    }
    this.props.createItem(item)
    this.setState({value: ''})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.createItem()
  }
  
  render() {

    const placeholder = 'Type name here...' 

    return (
      <div>
        <form className='title-input-form' onSubmit={this.handleSubmit} >
          <input 
            className='item-name-input' 
            placeholder={placeholder} 
            type="text" 
            value={this.state.value} 
            onChange={e => this.setState({value: e.target.value})} 
          />
          <input className='to-create-item' type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  nextItemId: IdGenerator.getRandomId(),
})

const mapDispatchToProps = dispatch => {
  return {
    createItem: item => dispatch(ItemActions.createItem(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItemInput)
