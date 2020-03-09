import React, { Component } from 'react'
import './customerDetailsForm.css';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const axios = require('axios');


class customerDetailsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Phone_Number: '',
            Pincode: '',
            Email: '',
            Address: '',
            city: '',
            LandMark: '',
            formfilled: false,
            divHide: false,
            item: null
        };
        this.state.item = this.props.location.state.detail;
        // console.log(item);
    }

    handleValueChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target
        console.log(this.setState({
            [name]: value
        }))
    }

    editDetails = () => {
        this.setState({ formfilled: !this.state.formfilled });
    }

    handleLogin = () => {

        const body = {
            Name: this.state.Name,
            Phone_Number: this.state.Phone_Number,
            Pincode: this.state.PinCode,
            Address: this.state.Address,
            city: this.state.city,
            Email: this.state.Email,
            LandMark: this.state.LandMark,
            Type: this.state.Type,


        };
        console.log(body);
        console.log(this.setState({ formfilled: !this.state.formfilled }));
        this.setState({ divHide: !this.state.divHide })


        // this.setState({
        //     Name: '', 
        //     Phone_Number: '', 
        //     PinCode: '',
        //     Locality:'',
        //     Email: '',
        //     Address: '',
        //     city: '',
        //     LandMark: '',
        //     Type: ''
        // });



        axios.post(`http://localhost:4000/customerDetails`, body)
            .then(res => {
                console.log(res);
                console.log(res.data);


            })
    }

    render() {
        console.log(this.state.item)
        return (
            <div className='mainForm'>
                <div className="toolBar">
                    <div className="imageLogo">
                        <img src="https://img.icons8.com/ios/64/000000/open-book.png" alt="abc" className="image"></img>
                    </div>
                    <div className="title">Book Store</div>
                    <div className="search">
                        <SearchIcon className="searchColor" />
                        <input type="text" className="input" placeholder="Search..." />
                    </div>
                </div>
                <div className='spacepaddding'>  </div>
                <form className="form" >

                    {/* <fieldset disabled="disabled"> */}
                    <div style={{ paddingTop: '3%', paddingBottom: '2%' }}><div style={{ paddingBottom: '2%' }}>CustomerDetails<label htmlFor="text-button-file">
                        <Button component="span" style={{ marginLeft: "72%" }} onClick={this.editDetails}>Edit</Button>
                    </label></div>
                        <div style={{ width: '80%', paddingBottom: '1%' }}>
                            <TextField id="outlined-basic" label="Name" name='Name' variant="outlined" value={this.state.Name} disabled={this.state.formfilled} onChange={(event) => this.handleValueChange(event)} style={{ width: '35%', marginRight: '0%' }} required />
                            <TextField id="outlined-basic" label="PhoneNumber" name='Phone_Number' variant="outlined" disabled={this.state.formfilled} value={this.state.Phone_Number} onChange={(event) => this.handleValueChange(event)} style={{ width: '39%', marginLeft: '1%' }} required />
                        </div>
                        <div style={{ width: '80%' }}>
                            <TextField id="outlined-basic" label="PinCode" name="PinCode" value={this.state.PinCode} disabled={this.state.formfilled} onChange={(event) => this.handleValueChange(event)} variant="outlined" style={{ width: '35%', marginRight: '0%' }} required />
                            <TextField id="outlined-basic" label="Email" name="Email" value={this.state.Email} disabled={this.state.formfilled} onChange={(event) => this.handleValueChange(event)} variant="outlined" style={{ width: '39%', marginLeft: '1%' }} required />
                        </div>
                    </div>
                    <div >
                        <TextField id="outlined-multiline-static" label="Address" multiline rows="4" name="Address" disabled={this.state.formfilled} style={{ width: '60%' }} value={this.state.Address} onChange={(event) => this.handleValueChange(event)} variant="outlined" required />
                    </div>
                    <div style={{ paddingTop: '1%' }}>
                        <div style={{ width: '80%', marginBottom: "0%" }}>
                            <TextField id="outlined-basic" label="city/town" variant="outlined" name="city" disabled={this.state.formfilled} value={this.state.city} onChange={(event) => this.handleValueChange(event)} style={{ width: '35%', marginRight: '0%' }} required />
                            <TextField id="outlined-basic" label="LandMark" variant="outlined" name="LandMark" disabled={this.state.formfilled} value={this.state.LandMark} onChange={(event) => this.handleValueChange(event)} style={{ width: '39%', marginLeft: '1%' }} required />
                        </div>
                    </div>
                    <div className='radiobutton'>
                        <div style={{ paddingTop: '2%' }} component="legend">Type</div>
                        <RadioGroup aria-label="type" name="Type" row >
                            <div style={{ paddingRight: '8%' }}>

                                <FormControlLabel value="Home"
                                    onChange={(event) => this.handleValueChange(event)}
                                    control={<Radio />}
                                    label="Home"
                                    disabled={this.state.formfilled} />

                            </div>
                            <div style={{ paddingRight: '8%' }}>
                                <FormControlLabel value="Work" control={<Radio />} checked={this.state.radio === 'Work'} onChange={(event) => this.handleValueChange(event)} label="Work" disabled={this.state.formfilled} />
                            </div>
                            <div style={{ paddingRight: '8%' }}>
                                <FormControlLabel value="Other" checked={this.state.radio === 'Other'} onChange={(event) => this.handleValueChange(event)} control={<Radio />} label="Other" disabled={this.state.formfilled} />
                            </div>
                        </RadioGroup>
                    </div>
                    {/* <div className='button'><Button  style={{ paddingLeft: '5%', paddingRight: '5%' }} onClick={this.handleLogin} variant="contained" color="primary">CONTINUE</Button></div> */}
                    {/* </fieldset> */}
                    <div className='button'><Button style={{ paddingLeft: '5%', paddingRight: '5%' }} onClick={this.handleLogin} variant="contained" color="primary">done</Button></div>
                </form>
                <div className='lastDiv' >
                {/* <div className="cart-title">My Cart(2)</div> */}
                <div className="orderSummary">Order Summary</div> 
                    <div className="divHide" style={{ display: this.state.divHide ? 'block' : 'none' }}>
                        {/* <h9>Order summary</h9> */}
                        {/* <div className="DDiv">
                            <div >
                                <img src={this.state.item.image} alt="abc" className='orderImage'></img>
                            </div>

                            {/* <div style={{ textAlign: "center" }}><p>dont make yuyuu</p></div> */}
                            {/* <div className=/div> 
                    {/* </div>
                </div> */}


               <div className="border">
                        
                        <div className="cart-image">
                        <img className='orderImage' src={this.state.item.image}></img>
                        <div className="book-title">{this.state.item.title}
                        <div className="book-author">{this.state.item.author}</div>
                        <div className="book-price"> Rs.{this.state.item.price}</div>
                        </div>

                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
export default customerDetailsForm