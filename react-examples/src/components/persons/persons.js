import React,{ Component } from "react";
import Person from '../person/Person';
import {AuthContext} from '../autContext/authContext'
export default class Persons extends Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn: false
        }
    }
    perosnArr = [
        {
            name: "abc",
            age: "22 years",
            gender: "male"
        },
        {
            name: "pqr",
            age: "23 years",
            gender: "female"
        },
        {
            name: "mno",
            age: "24 years",
            gender: "male"
        }

    ];

    doLogin(){
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    render(){
        if(this.state.isLoggedIn){
            console.log('LoggedIn')
        }
        const persons = this.perosnArr.map((person,index)=>{
            return <Person key={index} name={person.name}
                age={person.age}
                gender={person.gender}></Person>
        }) 
        return (
            <AuthContext.Provider value={{isLoggedIn: this.state.isLoggedIn}}>
                {this.state.isLoggedIn}===
               <button onClick={()=>this.doLogin()}>Authenticate</button>
               {persons}
               
            </AuthContext.Provider>
        )
    }
}