import React, { Component } from 'react';
import './App.css';
import CartHeader from './Components/CartHeader';
import CartFooter from './Components/CartFooter';
import CartItems from './Components/CartItems';
import AddItem from './Components/AddItem';

class App extends Component {

  constructor (props) {
    super();
    this.state ={
      copyright: 2018,
      cartItemsList: [
        // { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        // { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        // { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ],
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      quantity: 0,
      value: ""
    }
  }
      handleChangeQuantity = (event) => {
        this.setState({
          quantity: event.target.value
        })
      }

      handleChange = (event) => {
        this.setState({
          value: event.target.value
        })
      }
      
      handleClick = (event) => {
        event.preventDefault();
        const price = this.state.products.filter( product => {
          if (this.state.value === product.name){
            return product.priceInCents
          }
        })
        var newItem = { 
          id: this.state.cartItemsList.length + 1, 
          product: { 
            id: 40, 
            name: this.state.value, 
            priceInCents: '$' + (price[0].priceInCents/100)
          }, 
            quantity: this.state.quantity 
          }
          this.setState({cartItemsList: [...this.state.cartItemsList, newItem]})
      }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItemsList = {this.state.cartItemsList}/>
        <AddItem products = {this.state.products} handleChangeQuantity = {this.handleChangeQuantity} handleChange = {this.handleChange} handleClick = {this.handleClick}/>
        <CartFooter copyright = {this.state.copyright}/>
      </div>
    );
  }
}

export default App;
