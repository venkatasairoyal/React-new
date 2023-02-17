import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Product extends Component{
    constructor(props){
        super(props)
        this.state={
            model:"Redmi",
            product_name:"MI Note9 pro max",
            image:"https://images.hindustantimes.com/productimages/htmobile4/P34735/heroimage/138078-v3-xiaomi-redmi-note-9-pro-max-8gb-ram-mobile-phone-large-1.jpg?impolicy=new-ht-20210112&width=70&height=70",
            quantity:0,
            price:21000,
        }
    }
    changePrice(){
        // 
        // this.setState((prevState)=>({
        //     quantity:prevState.quantity-1
        // }))
        // console.log(this.state.quantity);
        this.setState({
            quantity:this.setState.quantity-1
        },
        ()=>{
            console.log(this.setState.quantity);
        })
    }
    changePrice1(){
        this.setState({
            quantity:this.setState.quantity+1
        },
        ()=>{
            console.log("callback value",this.state.quantity);
        })
        // this.setState((prevState)=>({
        //     quantity:prevState.quantity+1
        // }))
        
        // console.log(this.state.quantity);

    }
    // incfive(){
    //     this.changePrice1()
    //     this.changePrice1()
    //     this.changePrice1()
    //     this.changePrice1()
    //     this.changePrice1()
    // }
    // decfive(){
    //     this.changePrice()
    //     this.changePrice()
    //     this.changePrice()
    //     this.changePrice()
    //     this.changePrice()
    // }
    
    render(){
        return(
            <div>
             <div>
             <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="ml-auto">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-list"><a href="./about.html" className="nav-link">About</a></li>
                        <li className="nav-list"><a href="./contact.html" className="nav-link">Contact</a></li>
                        <li className="nav-list"><a href="./service.html" className="nav-link">Service</a></li>
                        <li className="nav-list"><a href="./Product.html" className="nav-link">Product</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                           <table className="table">
                           <thead>
                                <tr>
                                    <th>Model</th>
                                    <th>Prodcut_name</th>
                                    <th>Image</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.model}</td>
                                    <td>{this.state.product_name}</td>
                                    <td><img src={this.state.image} alt=""/></td>
                                    <td><i onClick={()=>{this.changePrice()}} className="fa fa-minus-circle"></i>{this.state.quantity}<i onClick={()=>{this.changePrice1()}} className="fa fa-plus-circle"></i></td>
                                    <td>{this.state.quantity * this.state.price}</td>
                                </tr>
                            </tbody>
                           </table>
                    </div>
                </div>   
                </div>
           </div>
            </div>
        )
    }   
}
export default Product