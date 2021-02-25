import React, { Component } from 'react';

class TodaysFood extends Component {
  render() {
    const { items } = this.props;
    let total = items.reduce((acc, food) => {
      return acc + food.calories * food.quantity;
    }, 0);

    return (
      <div>
        <h1>TOTAL</h1>
        {this.props.items.map((singleItem) => {
          return (
            <div>
              {singleItem.quantity} {singleItem.name} =
              {singleItem.calories * singleItem.quantity}
            </div>
          );
        })}
        <div>Total cal are = {total}</div>
      </div>
    );
  }
}

export default TodaysFood;
