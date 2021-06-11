import React from 'react'
import List from './List'

class UserList extends React.Component {
    state = {lists: null, loading: true}

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
    return (
        <div>
           <List listName={"Minha lista"}/> 
           <List listName={"Minha lista 2"}/> 
        </div>
    )
    }
}

export default UserList
