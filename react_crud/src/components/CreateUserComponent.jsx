import React, { Component } from 'react'
import UserService from '../services/UserService';
 import $ from 'jquery';
 


class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount() {

        // validation jquery
        $(document).ready(function(){
            $("#save").click(function(){

                // First Name Empty Validation
                if($("#fname").val()===""){
                    alert("Please enter your First Name!");
                    $("#fname").focus();
                    return false;
                }
                // First Name Numeric Validation
            
                if($.isNumeric($("#fname").val())){
                    alert("Please enter Alphanumeric First Name!");
                    $("#fname").val('');
                    $("#fname").focus();
                    return false;
                }
                // first Name Length Validation
                if($("#fname").val().length<3){
                    alert("First Name must have upto minium 3 charector!");
                    $("#fname").val('');
                    $("#fname").focus();
                    return false;

                }
                // Last Name empty Validation
                if($("#lname").val()===""){
                    alert("Please Enter Your Last Name!");
                    $("#lname").focus();
                    return false;

                }
                // Last Name Numeric Validation
                if($.isNumeric($("#lname").val())){
                    alert("Please Enter Alphanumeric Last Name!");
                    $("#lname").val('');
                    $("#lname").focus();
                    return false;

                }
                // Last Name Length Validation
                if($("#lname").val().length<3){
                    alert("Last Name must upto minium 3 charector!");
                    $("#lname").val('');
                    $("#lname").focus();
                    return false;

                }
                // Email empty validaion
                if($("#email").val()===""){
                    alert("Please Enter Your Email!")
                    $("#email").focus();
                    return false;
                }
                // Email length validaion
                if($("#email").val().length<3){
                    alert("Email must upto minium 3 charector!");
                    $("#email").val('');
                    $("#email").focus();
                    return false;

                }

                var email=$('#email').val();
                var emailRegex= /@[a-zA-z]+.com/;
                if(!emailRegex.test(email)){
                    alert('plz enter valid email addresss');
                    $('#email').focus();
                    return false;
                }
                 // if wether email has @ Character
                // if($("#email").val().indexOf('@')===-1){
                //     alert("Email must have @ character!");
                //     $("#email").val("");
                //     $("#email").focus();
                //     return false;
                // }
              


            })
        })

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            UserService.getUserById(this.state.id).then((res) => {
                let user = res.data;
                this.setState({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    emailId: user.emailId
                });
            });
        }
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        console.log('user => ' + JSON.stringify(user));

        // step 5
        if (this.state.id === '_add') {
            UserService.createUser(user).then(res => {
                this.props.history.push('/users');
            });
        } else {
            UserService.updateUser(user, this.state.id).then(res => {
                this.props.history.push('/users');
            });
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    cancel() {
        this.props.history.push('/users');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center card-header">Add User</h3>
        } else {
            return <h3 className="text-center card-header">Update User</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 card-header" id="main">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" id="fname" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}  />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" id="lname" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" id="email" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>

                                    <button className="btn btn-success" id="save" onClick={this.saveOrUpdateUser}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateUserComponent
