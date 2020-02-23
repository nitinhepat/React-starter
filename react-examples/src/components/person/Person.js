import React, { Component } from 'react';
import {AuthContext} from '../autContext/authContext'

export default class Person extends Component {

    render(){ return (
        <AuthContext.Consumer>
        {({isLoggedIn})=>(
            
             <section className="person-section">
                User {isLoggedIn ? 's Authenticated': 'needs to login'}
             <div>
                 <label>Name:</label> {this.props.name}
             </div>
             <div>
                 <label>Age:</label>{this.props.age}</div>
             <div>
                 <label>Gender:</label>{this.props.gender}
             </div>

         </section>
        )}
           
            </AuthContext.Consumer>
    )
}
}
