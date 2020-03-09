import React, { Component } from 'react';
import './dashboard.css';
//import Button from '@material-ui/core/Button';
class dashBoard extends Component {
  render() {
    return (
      <div className="titlebar">
        <img src="https://img.icons8.com/ios/64/000000/open-book.png" alt="aa" className="image" />
        {/* <Button className="abc" variant="contained" color="primary">
      Hello World
    </Button> */}
      </div>
    );
  }
}

export default dashBoard;


// class Parent extends React.Component {
//   constructor(props) {
//       super(props)
//       this.state = {
//           data: "Default parent state"
//       };
      
//       this.childHandler = this.childHandler.bind(this)
//   }

  
  // childHandler(dataFromChild) {
     
  //     console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
  //     this.setState({
  //         data: dataFromChild
  //     },() => console.log('Updated Parent State:', this.state));
  // }

//   render() {
//             return <Child action={this.childHandler} />
//   }
// }




// class Child extends React.Component {
  
//   render() {
//       return <a onClick={() => this.props.action('Set Parent state set from child: ' + Math.floor(Math.random() * 999))}>Update Parent</a>;
//   }
// }




// // Render
// ReactDOM.render(
//   <Parent />,
//   document.getElementById('container')
// );