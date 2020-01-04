import React,{ Component } from "react";

export default class ErrorBoundary extends Component{
state = {
    hasError: false,
    errorMessageA:''
}
componentDidCatch(error,info){
    this.setState({
        hasError: true,
        errorMessage: error
    })
}
render(){
     if(this.state.hasError){
        return <div>={this.state.errorMessage}</div>
    } else {
        return <div>{this.props.children}</div>;
    }
}

}