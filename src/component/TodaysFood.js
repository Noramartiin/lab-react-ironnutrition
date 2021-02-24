import React, { Component } from 'react';

class TodaysFood extends Component {

  render() {
    const {items} = this.props
    let total = 0
    return (
      <div>
        <h1>TOTAL</h1>
        {this.props.items.map((singleItem) => {
          return (
            <div>
              {singleItem.name} {singleItem.calories} {singleItem.quantity}=
              {singleItem.calories} * {singleItem.quantity}
            </div>
          );
        })}
        <div>Final Total is: {total}</div>
      </div>
    );
  }
}

export default TodaysFood;
