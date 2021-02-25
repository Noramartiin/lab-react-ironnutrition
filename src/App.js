import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './component/FoodBox.js'
import foods from './foods.json';
import { Component } from 'react';
import AddNewForm from './component/AddNewFood.js'
import Search from './component/Search.js'
import TodaysFood from './component/TodaysFood.js'

class App extends Component {
  state = {
    foods: foods,
    filteredFood: foods,
    showForm: false,
    totalItems:[],
  };

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  handleAddForm = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let calories = event.target.calories.value;
    let image = event.target.image.value;

    let newItem = {
      name: name,
      calories: calories,
      image: image,
    };

    this.setState({
      showForm: false,
      foods: [newItem, ...this.state.foods],
      filteredFood: [newItem, ...this.state.filteredFood],
    });
  };

  handleSearch = (event) => {
    let searchText = event.target.value.toLowerCase();

    let filteredArray = this.state.foods.filter((singleFood) => {
      return singleFood.name.toLowerCase().includes(searchText);
    });

    this.setState({
      filteredFood: filteredArray,
    });
  };

  handleAddItem=(foods, quantity)=>{
      let myItem={
        name: foods.name,
        calories: foods.calories,
        quantity: quantity
      }
      this.setState({
        totalItems:[...this.state.totalItems, myItem]
      })
  }

  render() {
    const { foods, showForm, filteredFood, totalItems } = this.state;
    return (
      <div>
        {showForm ? (
          <AddNewForm onAdd={this.handleAddForm} />
        ) : (
          <button onClick={this.handleShowForm}>Show</button>
        )}
        <Search change={this.handleSearch} />
        {filteredFood.map((singleFood, index) => {
          return <FoodBox key={singleFood.name} foods={singleFood} onItemAdd={this.handleAddItem}/>;
        })}
        <TodaysFood items={totalItems} />
      </div>
    );
  }
}



export default App;