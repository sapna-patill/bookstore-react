import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './cart-icon.css'
import Customer from '../customerDetails/customerDetails'
class CartIcon extends Component {
    constructor(props) {
        super(props)
        this.count = 1
        
        this.state = {
            item: null,
            purchaseBookIndividualCount: [],
            totalPrice: 0
        }

        this.state.item = this.props.location.state.selectedBooks
        this.state.item.map((item)=>{
            { this.state.totalPrice = this.state.totalPrice + parseInt(item.price) }
        })
    }

    decrement = (i, price) => {
        if (this.state.purchaseBookIndividualCount[i] > 1) {
            this.state.purchaseBookIndividualCount[i]--;
            this.setState({ purchaseBookIndividualCount: this.state.purchaseBookIndividualCount });
            this.state.totalPrice=this.state.totalPrice-parseInt(price);
            this.setState({totalPrice:this.state.totalPrice})
        }
    }

    increment = (i,price) => {
        this.state.purchaseBookIndividualCount[i]++;
        this.setState({ purchaseBookIndividualCount: this.state.purchaseBookIndividualCount });
        this.state.totalPrice=this.state.totalPrice+parseInt(price);
        this.setState({totalPrice:this.state.totalPrice})
    }

    remove = (item) => {
        console.log(this.state.item.length);
        let a;
        for (let i = 0; i < this.state.item.length; i++) {
            // a = this.state.item[i].find(o => o.title == item.title)
            if (this.state.item[i].title == item.title) {
                this.state.totalPrice=this.state.totalPrice-parseInt(item.price);
                this.setState({totalPrice:this.state.totalPrice})
                this.state.item.splice(i, 1);
                this.setState({ item: this.state.item })
            }
        }
    }

    render() {
        var Books = this.state.item.map((item, i) => {
            this.state.purchaseBookIndividualCount.push(1)
            // { this.state.totalPrice = this.state.totalPrice + parseInt(item.price) }
            
            return (
                <div>
                    <div className="cart-image1">
                        <img className="image" src={item.image}></img>
                        <div className="book-title">{item.title}
                            <div className="book-author">{item.author}</div>
                            <div className="book-price" > Rs.{item.price}</div>
                            <div>
                                <button className="minus-plus" onClick={() => { this.decrement(i,item.price) }}>-</button>
                                <input className="text" value={this.state.purchaseBookIndividualCount[i]} ></input>
                                <button className="minus-plus" onClick={() => { this.increment(i,item.price) }}>+</button>
                                <button className="remove" onClick={() => { this.remove(item) }}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="border">
                    <div className="cart-title">My Cart({this.state.item.length})</div>
                    {Books}
                    <div className="total-price"><p id="totalprice">Total Price: {this.state.totalPrice}</p></div>
                    <button className="place-order">PLACE ORDER</button>
                </div>
                {/* <Customer/> */}
            </div>
        )
    }
}
export default withRouter(CartIcon);