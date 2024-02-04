import React, { Component } from 'react'
import UserService from '../services/UserService'


class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    
        confirmDelete(userId) {
            const isConfirmed = window.confirm("Are you sure you want to delete this item?");
            
            if (isConfirmed) {
              this.deleteUser(userId);
            }
          }
          deleteUser(userId) {
             // delete logic here
                UserService.deleteUser(userId).then( res => {
                    this.setState({users: this.state.users.filter(user => user.id !== userId)});
                });
           
          
    }
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

  componentDidMount(){
   
        UserService.getUsers().then((res) => {
            if(res.data==null)
            {
                this.props.history.push('/add-user/_add');
            }
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center pt-3 border-bottom">Users List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered text-center">

                            <thead>
                                <tr id="he">
                                    <th> User First Name</th>
                                    <th> User Last Name</th>
                                    <th> User Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.id}>
                                             <td> { user.firstName} </td>   
                                             <td> {user.lastName}</td>
                                             <td> {user.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editUser(user.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.confirmDelete(user.id)} className="btn btn-danger" id="del">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListUserComponent;
