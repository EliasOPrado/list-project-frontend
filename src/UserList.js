import React from 'react'
import List from './List'
import Login from './Login'

class UserList extends React.Component {
    state = {lists: [], loading: true}

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        config.headers['Authorization'] = 'Token c3a83fad2f2873861410b7619908b1021a7409d4'
        const url = 'http://127.0.0.1:8000/list/'
        const response = await fetch(url, config) // add token
        const data = await  response.json()
        console.log('DATA ==>', data)
        this.setState({lists:data, loading: false})
    }
    render(){
        const listApi = this.state.lists

        // if token is empty display the login component
        let token = localStorage.getItem('token')
        if(!token){
            return <Login />
        }else {
            return (
                <div>
                   
                   {listApi.map(list => <List key={list.id}listName={list.name} items={list.item_set}/>)}
                </div>
            )
        }
    
    }
}

export default UserList
