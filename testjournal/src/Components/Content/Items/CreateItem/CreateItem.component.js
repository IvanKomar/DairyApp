import React from 'react'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'

import './CreateItem.component.css'
import ItemActions from '../../../../Store/Actions/Item'

class CreateItemInput extends React.Component {
  
  fields = {
      title: 'title'
  }
  get title() {
      return this.props.form.getFieldsValue().title
  }
  createItem() {
    const nextId = this.props.items.length + 1
    const item = {
      id: nextId,
      title: this.title,
    }
    this.props.createItem(item)
  }
  
  render() {
    const propsTitle = this.props.form.getFieldProps('title')
    return (
       <form className='title-input-form'> 
       <input 
       type='text'
       value={this.title}
       {...propsTitle}
        className='item-name-input' 
        placeholder='Type name here...' 
      /> 
      <button className='to-create-item' onClick={() => this.createItem()} >Add new</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
})

const mapDispatchToProps = dispatch => {
  return {
    createItem: item => dispatch(ItemActions.createItem(item)),
  }
}

const CreateItem = createForm()(CreateItemInput)

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem)
