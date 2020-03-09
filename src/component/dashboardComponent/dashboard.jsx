import React, { Component } from 'react';
import './dashboard.css';
import { withRouter } from 'react-router-dom';
import getAllBooksService from '../../service/service'
import AllBooks from '../allBooks/allBooks'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

class Dashboard extends Component {
   constructor(props) {
      super(props);
        this.state = {
            getBooks: [],
            cartSelectedBook:[],
            count:0
        }
        this.childHandler = this.childHandler.bind(this)
   }
   getAllBooksData = []
  
   componentDidMount() {
      new getAllBooksService().getAllBooks().then(response => {
         
         var allBooks = response.data.result;
        
         for(let i=0;i<allBooks.length;i++){
            if(allBooks[i].title.length>25)
            {
               allBooks[i].title=allBooks[i].title.slice(0, 25);
               allBooks[i].title=allBooks[i].title+"...";
            }
         }
         console.log(allBooks);
         this.setState({ getBooks: allBooks })
      })
   }


   handleSearch = (event) => {
      if (event.target.value.length >= 1) {
         this.setState({ searchValue: event.target.value });
      }
   }
   childHandler(dataFromChild) {
      this.state.cartSelectedBook.push(dataFromChild)
      console.log(this.cartSelectedBook)
      this.setState({count:this.state.cartSelectedBook.length})
      
  }
   handleSearchBook = () => {
      let searchDataValue = this.state.searchValue
      new getAllBooksService().searchBookByTitle(searchDataValue).then((data) => {
         let allBooks=data.data.result;
         for(let i=0;i<allBooks.length;i++){
            if(allBooks[i].title.length>25)
            {
               allBooks[i].title=allBooks[i].title.slice(0, 25);
               allBooks[i].title=allBooks[i].title+"...";
            }
         }
            this.setState({ getBooks: allBooks });

      }).catch((err) => {
         console.log(err);
      })
   }
   handleSortBy=(event)=>{
      new getAllBooksService().sortBook(event.target.value).then((data) => {
         let allBooks=data.data.result;
         for(let i=0;i<allBooks.length;i++){
            if(allBooks[i].title.length>25)
            {
               allBooks[i].title=allBooks[i].title.slice(0, 25);
               allBooks[i].title=allBooks[i].title+"...";
            }
         }
            this.setState({ getBooks: allBooks });
      }).catch((err) => {
         console.log(err);
      })
   }
   onSubmit() {
      this.props.history.push('/cartIcon', { selectedBooks: this.state.cartSelectedBook })
   }
   render() {
      return (
         <div className='main' >
           <div className='upper'>
                    <div className='dashboard'>
                        <div className='logo'>
                            <img src="https://img.icons8.com/ios/64/000000/open-book.png" alt="optional" />
                        </div>
                        <div className='title'>Bookstore</div>
                        <div className="search">
                            <InputBase
                                type="search"
                                placeholder="Search…"
                                onChange={this.handleSearch}
                                onKeyDown={this.handleSearchBook}
                                startAdornment={(
                                    <InputAdornment position="start">
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )}
                            />
                        </div>
                    </div>
                    <button className="cart-icon w3-btn" onClick={() => this.onSubmit()}>
                        Cart
                        <ShoppingCartOutlinedIcon /><span class="w3-badge "><button className="itemCounts" disabled>{this.state.count}</button></span>
                    </button>
                </div>
            <div className='subMain'>
            <div className='lower'>
               <div className="bookStore">Books<div id="itemsCount">({this.state.getBooks.length} items)</div>
               <select id="sortByDropDown" onChange={this.handleSortBy.bind(this)}>
                     <option value="relevancce">Sort by relevance</option>
                     <option value="-1">Price:low to high</option>
                     <option value="1">Price:hight to low</option>
                     <option value="date">Newest arraivals</option>
               </select>
               </div>
               <AllBooks getAllBooksData={this.state.getBooks} action={this.childHandler} />
            </div>
         </div>

            {/* <AllBooks getAllBooksData={this.state.getBooks} /> */}
         </div>
      );
   }
}
export default withRouter(Dashboard);