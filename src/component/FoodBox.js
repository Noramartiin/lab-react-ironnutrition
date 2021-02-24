import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    quantity: 1,
  };

  handleQuantity = (event) => {
    this.setState({
      quantity: event.target.value,
    });
  };

  render() {
    const { foods, onItemAdd } = this.props;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={foods.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{foods.name}</strong> <br />
                <small>{foods.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={this.handleQuantity}
                  className="input"
                  type="number"
                />
              </div>
              <div className="control">
                <button
                  onClick={() => {
                    onItemAdd(foods, this.state.quantity);
                  }}
                  type="submit"
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
