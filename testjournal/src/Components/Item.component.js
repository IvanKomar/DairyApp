import React from 'react'
import './Item.component.css'

class Items extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        comments: []
    }
  }

  render() {
    return (
      <div className='Items-container'> 
      <h2>Items</h2>
      <form onSubmit={this.props.handleSubmit}>
      <input 
        className='to-type-item-name' 
        placeholder='Type name here...' 
        value={this.state.value}  
        onChange={this.props.handleChange}
      />
      <button className='to-add-item' onClick={this.props.handleSubmit} value='Отправить'>Add new</button>
      </form>
      <div>
          {this.state.value}
           <button onClick={this.handleChange}></button>
        </div>
      </div>
       
     
    )
  }
}

export default Items