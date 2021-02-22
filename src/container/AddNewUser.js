import React from 'react';
import AddNewUserDisp from '../components/AddNewUserDisp';
const addNew = `https://jwt-be-app.herokuapp.com/users/register`
class AddNewUser extends React.Component {
    constructor() {
        super();
        this.state = {
            user: ''
        }
    }
    changeHandler = (name,value) =>{
        this.setState({
            user:{
                ...this.state.user,
                [name]:value
            }
        })
    }
    addUser = (event) => {
        event.preventDefault()
        // console.log(this.state.user)
        const data = this.state.user
        
        fetch(`${addNew}`,{
            method:'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
               
        .then(
            this.props.history.push('/list'))
    }
    render() {
        return(
            <AddNewUserDisp user = {this.state.user}
            changeHandler = {this.changeHandler}
            addUser = {this.addUser}/>
        );
    }
}
export default AddNewUser;