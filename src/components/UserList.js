import React,{Component} from 'react';
import UserDisplay from './UserDisplay';

const getUsers = 'https://jwt-be-app.herokuapp.com/users';
const getUserDetails = 'https://jwt-be-app.herokuapp.com/users'
const deleteUser = 'https://jwt-be-app.herokuapp.com/users';
const editDetatils = 'https://jwt-be-app.herokuapp.com/users';

class UserList extends Component{
    constructor(){
        super()

        this.state={
            users:'',
            userData:'',
        }
    }

    componentDidMount(){
        fetch(getUsers,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {this.setState({users:data})})
    }
    editUser = (name,value) => {
        // console.log(value)
        const userDetails = `${getUserDetails}/${value}`;
        // console.log(userDetails)
        fetch(userDetails)
        .then(resp => resp.json())
        .then(data => this.setState({
            userData: data
        },() => console.log(this.state)))
    }
    deleteUser = (name,value) => {
        // console.log(value)
        const id = value
        fetch(`${deleteUser}/${id}`,{
            method:'DELETE',
            headers: {'Content-Type':'application/json'}            
        })
        .then(window.location.reload())
    }
    changeDetails = (name,value) =>{
        this.setState({
            userData:{
                ...this.state.userData,
                [name]:value
            }
        })
    }
    updateUser = (event) => {
        event.preventDefault()
        console.log(this.state.userData)
        const data = this.state.userData
        const id = data._id
        fetch(`${editDetatils}/${id}`,{
            method:'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(
            window.close(),
            window.location.reload())
    }

    render(){
        if(sessionStorage.getItem('_ltk') == null){
            this.props.history.push('/login')
        }
        if(sessionStorage.getItem('_ltk') !== null && sessionStorage.getItem('_rtk') !== "Admin"){
            this.props.history.push('/profile?message=You Are Not Admin')
        }
        return(
            <UserDisplay users = {this.state.users}
            userData = {this.state.userData}
            deleteUser = {this.deleteUser}
            editUser = {this.editUser}
            updateUser = {this.updateUser}
            changeDetails ={this.changeDetails}/>
        )
    }

    

}

export default UserList