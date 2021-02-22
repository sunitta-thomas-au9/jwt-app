const AddNewUserDisp = (props) => {
    return(
        <div className="container">
            <div className="heading">
                <h2>Create new user</h2>
            </div>
            <form>                                                           
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input 
                        type="text" className="form-control" 
                        id="name" placeholder="Enter First name" 
                        name="name" required
                        value={props.user.name}
                        onChange={(event)=> props.changeHandler(event.target.name,event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label for="password">Password:</label>
                    <input 
                        type="text" className="form-control" 
                        id="password" placeholder="Enter Password" 
                        name="password" required
                        value={props.user.password}
                        onChange={(event)=> props.changeHandler(event.target.name,event.target.value)}
                    />
                </div>                                                             
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input 
                        type="email" className="form-control" 
                        id="email" placeholder="Enter Email" 
                        name="email" required
                        value={props.user.email}
                        onChange={(event)=> props.changeHandler(event.target.name,event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label for="role">Role:</label>                                    
                    <select className="form-control" 
                        id="role"  
                        name="role" 
                        value={props.user.role}
                        onChange={(event)=> props.changeHandler(event.target.name,event.target.value)}>
                        <option selected aria-readonly>----Select----</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>                                        
                    </select>
                </div>
                <div className="form-group">
                    <label for="isAactive">Active:</label>                                    
                    <select className="form-control" 
                        id="isActive"  
                        name="isActive" 
                        value={props.user.isActive}
                        onChange={(event)=> props.changeHandler(event.target.name,event.target.value)}>
                        <option selected aria-readonly>----Select----</option>
                        <option value="true">true</option>
                        <option value="false">false</option>                                        
                    </select>
                </div>                                              
            </form>
            <button type="submit"className="btn btn-primary"
                onClick={(event)=>props.addUser(event)}>Add New User</button> 
                
        </div>
    );
}

export default AddNewUserDisp