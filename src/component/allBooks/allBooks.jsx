import React, { Component } from 'react';
import './allBooks.css';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card'


class AllBooks extends Component {
   constructor(props) {
      super(props);
      this.array = [];
      this.state = {
         item: null,
         addToBagCss: []
      }
   };
   addToCart = (item, i) => {
      this.state.addToBagCss[i] = true;
      this.setState({ addToBagCss: this.state.addToBagCss })
      this.props.action(item);

   }
   

   render() {
      var Books = this.props.getAllBooksData.map((item, i) => {
         this.state.addToBagCss.push(false);
         return (
            <div className="div" >
               <Card className='card'>
               <div className='info' id={i}>
                  <div className='imageSpace' >
                     <img className='bookImg' src={item.image} alt={"bookImg"} ></img>
                  </div>
                  <div className='bookName'>{item.title}</div>
                  <div className='authorName'>{item.author}</div>
                  <div className='bookName'>Rs.{item.price}</div>
                  <Card className="card bookInfo" >
                     <p id="bookTitleForDescription" gutterBottom> Book Detail</p>
                     <p id="description">{item.description}</p>
                  </Card>
               </div>
               <button className='beforeAddToBag' hidden={this.state.addToBagCss[i]} onClick={() => { this.addToCart(item, i) }} >ADD TO BAG</button>
               <button className='afterAddToBag' hidden={!this.state.addToBagCss[i]} disabled >ADDED TO BAG</button>
               </Card>
            </div>
         )
      })
      return (
         <div>
            {Books}
         </div>
      )
   }

}
export default withRouter(AllBooks);

