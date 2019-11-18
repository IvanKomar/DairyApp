import React from 'react'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'

import './CreateItem.component.css'
import ItemActions from '../../../../Store/Actions/Item'

const range = {
  min: 1,
  max: 50,
}

class CreateItemInput extends React.Component {

  fields = {
      title: 'title'
  }
  get title() {
      return this.props.form.getFieldsValue().title
  }
  get isValid() {
    return this.title && this.title.length <= range.max && this.title.length > range.min
  }
  get isError() {
    return this.props.form.getFieldError('title')
  }
  get isDisabled() {
    return !this.isValid || this.isError
  }
  errorMessage = () => this.props.form.getFieldError('title')

  validator = (rule, value, callback) => {
    if (this.title.length > range.max || this.title.length === range.min) {
      callback(new Error(`Title should contain atleast ${range.min + 1} and not more than ${range.max} symbols`))
    } else {
      callback()
    }
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
    const placeholder = 'Type name here...' 
    const settings = { 
      rules: [
        { required: true, 
          message: this.validator 
        },
        { validator: this.validator },
      ]
    }
    const propsTitle = this.props.form.getFieldProps('title', settings)
    return (
      <div>
        <form className='title-input-form'> 
          <input 
            placeholder={placeholder}
            {...propsTitle}
            className='item-name-input' 
          /> 
          <button className='to-create-item' disabled={this.isDisabled} onClick={() => this.createItem()} >Add new</button>
        </form>
        <div className='error-mesage'> 
          {this.errorMessage()}
        </div>
      </div>
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
