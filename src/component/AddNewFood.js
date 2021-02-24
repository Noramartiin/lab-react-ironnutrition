import React, { Component } from 'react';

class AddForm extends Component{
    render(){
        const {onAdd} = this.props
        return (
          <form onSubmit={onAdd}>
            <input name="name" type="text" placeholder="Enter the name"></input>
            <input name='calories' type='number'></input>
            <input name="image" type='text'></input>
            <button type='submit'>Add</button>
          </form>
        );
    }

}

export default AddForm