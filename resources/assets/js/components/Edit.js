import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
 
export default class Edit extends Component {    

    constructor(props){
        super(props);
        this.state = {
            customer: {},
            customerId: 1,
            imageToUpload: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            repPassword: ''          
        }

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)      
        this.handleLastNameChange = this.handleLastNameChange.bind(this) 
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this) 
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleRepPasswordChange = this.handleRepPasswordChange.bind(this)

        this.handleUpdateCustomer = this.handleUpdateCustomer.bind(this)
    }

/** Get Customer data*/
    componentDidMount() {
        axios.get('/api/get-customer/' + this.state.customerId)
        .then(res => {
            this.setState({
                 customer: res.data
            }); 
            this.extractObj();           
          })
          .catch(errors =>{
            console.log(errors);
        })
    }

    extractObj(){    
        this.setState({
            customerId: this.state.customer.id,
            imageToUpload: this.state.customer.imagePath,
            firstName: this.state.customer.firstName,
            lastName: this.state.customer.lastName,
            email: this.state.customer.email,
            phoneNumber: this.state.customer.phoneNumber,
            password: this.state.customer.password
        })  
    }

  /** Upload image listener */
    handleImageChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
              return;
        this.createImage(files[0]);
    }

      createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.setState({
            imageToUpload: e.target.result
          })
        };
        reader.readAsDataURL(file);
    }

    /** Input field listeners*/
    handleFirstNameChange (event) {         
       this.setState({ firstName: event.target.value });    
    }

    handleLastNameChange (event) {
        this.setState({ lastName: event.target.value });
    }

    handleEmailChange (event) {
        this.setState({ email: event.target.value });
    }

    handlePhoneNumberChange (event) {
        this.setState({ phoneNumber: event.target.value });
    }

    handlePasswordChange (event) {
        this.setState({ password: event.target.value });
    }

    handleRepPasswordChange (event) {
        this.setState({ repPassword: event.target.value });
    }    

    /** Update current customer */
    handleUpdateCustomer() {   
        axios.put('/api/update-customer/' + this.state.customer.id, { 
            image: this.state.imageToUpload,      
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password
        })
        .then(res => {
            this.setState({
                customer: res.data
            });
            console.log(res.data);
        })
        .catch(function (response) {
            console.log(response);              
        });
    }         
 
    render() {      
        return (         
        <div className="card">
            <div className="card-header"><h4>Edit Profile</h4></div>
            <div className="card-body">      
            <form role="form" >               
                <div className="row img-area">                                 
                    <div className="col-sm-5 col-md-6">
                        <img src={this.state.imageToUpload}  alt="avatar" className="img-fluid"/>
                    </div>
                    <div className="col-sm-7 col-md-6 my-auto">
                        <span className="btn btn-outline-dark btn-file">
                            Upload Image <input type="file" onChange={(e)=>this.handleImageChange(e)}/>
                        </span>
                        <br />
                        <br />
                        <div className="img-info">
                            <div>Minimum size is 250 x 250 px</div>
                            <div>Only JPG and PNG images are allowed</div>
                        </div>
                    </div>
                </div>  
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" defaultValue= {this.state.customer.firstName} onChange={this.handleFirstNameChange} required="true"></input>
                        </div>
                        <div className="col">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" defaultValue={this.state.customer.lastName}  onChange={this.handleLastNameChange} required="true"></input>
                        </div>
                    </div>          
                </div>
                <br />
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" defaultValue={this.state.customer.email} onChange={this.handleEmailChange} required="true"></input>
                        </div>
                        <div className="col">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" className="form-control" defaultValue={this.state.customer.phoneNumber}  onChange={this.handlePhoneNumberChange} required="true"></input>
                        </div>
                    </div>          
                </div>
                <br />
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <hr />
                        </div>
                    </div>          
                </div>               
                <br />
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="password">Password</label>
                            <input type="text" className="form-control" defaultValue={this.state.customer.password} onChange={this.handlePasswordChange} required="true"></input>
                        </div>
                        <div className="col">
                            <label htmlFor="repeatPassword">Repeat Password</label>
                            <input type="text" className="form-control" defaultValue={this.state.customer.password} onChange={this.handleRepPasswordChange} required="true"></input>
                        </div>
                    </div>          
                </div>                        
                    <div className="row footer">
                        <div className="col-md-12">  
                            <button type="submit" className="btn btn-primary" onClick={this.handleUpdateCustomer}>Save</button>
                        </div>
                    </div>    
                </form>                       
            </div>
        </div>
        );
    }
}

if (document.getElementById('edit')) {
    ReactDOM.render(<Edit />, document.getElementById('edit'));
}
