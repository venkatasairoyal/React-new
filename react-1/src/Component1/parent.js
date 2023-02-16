import React, { Component } from "react"
import Four from "./Chuldren";
class Three extends Component{
    Product_name="ipad"
    price=30000;
    company_name="Samsung"

    render(){
        return(
            <Four Product_name={this.Product_name} price={this.price} company_name={this.company_name}/>
        ) 
    }
}
export default Three