import React, { Component } from "react";
class Four extends Component{
    render(){
        return (
            <div>
            <h3>{this.props.Product_name}</h3>
            <h3>{this.props.price}</h3>
            <h3>{this.props.company_name}</h3>
        </div>
        )
    }
}
export default Four