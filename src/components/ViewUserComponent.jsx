import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 card-header">
                    <h3 className = "text-center pt-2 card-header"> View User Details</h3>
                    <div className = "card-body" id="hov">
                        <ul className="list-group list-group-flush list-unstyled h6 " >
                        <li className="list-group-item"><div className = "row ">
    
                            <label > User First Name : </label>
                            <div className="text-secondary pl-2"> { this.state.user.firstName }</div>
                        </div>
                        </li>
                       <li className="list-group-item"> <div className = "row ">
                            <label> User Last Name : </label>
                            <div className="text-secondary pl-2"> { this.state.user.lastName }</div>
                        </div>
                        </li>
                        <li className="list-group-item"><div className = "row">
                           <label > User Email ID :</label>
                            <div className="text-info pl-2"> { this.state.user.emailId }</div>
                        </div>
                        </li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent
