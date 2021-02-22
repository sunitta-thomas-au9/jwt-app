import React from 'react';
import { withRouter } from 'react-router';
import './style.css';
const UserDisplay = (props) => {
    const renderList = ({users}) => {
        if(users){
            return users.map((user,index) => {
                return(
                    <tr>
                        <td>{index}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            <button type="button" className="edit btn btn-warning"
                            data-toggle="modal" data-target="#myModal"
                            name="id" value={user._id}
                            onClick={(event)=>props.editUser(event.target.name,event.target.value)}
                            id={user._id}>Edit</button>
                            &nbsp;
                            <button type="button" className="btn btn-danger" name="id" value={user._id}
                            onClick={(event)=>props.deleteUser(event.target.name,event.target.value)}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }
    }
    const addNewUser = () => {
        props.history.push('/addnew')
    }

    return(
        <>
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        
                        <h2 className="panel-h3-heading">List Of Users</h2>
                                        
                        <button className="btn btn-success addNew"
                            onClick={addNewUser}>
                            Add New User
                        </button>
    
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table table-hover table-striped" id="myTable">
                            <thead className="thead-dark">
                                <tr>
                                    <th class="bg-info">Sno</th>
                                    <th class="bg-info">Name</th>
                                    <th class="bg-info">Email</th>
                                    <th class="bg-info">Role</th>
                                    <th class="bg-info">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderList(props)}
                            </tbody>
                        </table>
                        </div>

                    </div>
                    
                </div>         
    
            </div>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                
                         {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Update the User Details</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                
                        {/* Modal body */}
                        <div className="modal-body">
                            <form action="/editUser" method="POST" id="update_user">
                            <div className="form-group">
                                    <label for="name">Id:</label>
                                    <input type="text" readonly 
                                        className="form-control" 
                                        id="update_id"  
                                        name="_id" readOnly
                                        value={props.userData._id}
                                        
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label for="name">Name:</label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="update_name" placeholder="Enter First name" 
                                        name="name" required
                                        value={props.userData.name}
                                        onChange={(event)=> props.changeDetails(event.target.name,event.target.value)}
                                    />
                                </div>                                                             
                                <div className="form-group">
                                    <label for="email">Email:</label>
                                    <input 
                                        type="email" className="form-control" 
                                        id="update_email" placeholder="Enter Email" 
                                        name="email"
                                        value={props.userData.email}
                                        onChange={(event)=> props.changeDetails(event.target.name,event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="role">Role:</label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="update_role"  
                                        name="role" readOnly
                                        value={props.userData.role}                                        
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="isAactive">IsActive:</label>                                    
                                    <select className="form-control" 
                                        id="isActive"  
                                        name="isActive" 
                                        value={props.userData.isActive}
                                        onChange={(event)=> props.changeDetails(event.target.name,event.target.value)}>
                                        <option value="true">true</option>
                                        <option value="false">false</option>                                        
                                    </select>
                                </div>
                                
                            </form>
                
                        </div>
                
                         {/* Modal footer  */}
                        <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="submit" id="update_table" className="btn btn-primary"
                                onClick={(event)=>props.updateUser(event)}>update</button>
                        </div>
                
                    </div>
                </div>
            </div>
           
        </>
            
    );
}


export default withRouter(UserDisplay);