import React from 'react'
const Person = () =>{
    let randomNumber = Math.random();
    if(randomNumber > 0.7){
        throw new Error()
    }
    return (
        <div>
            Hello Inside Person
        </div>
        )
}

export default Person;