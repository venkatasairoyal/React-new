import React from "react";
class Product extends React.Component{
    state={
        product:{
            product_Name : "SAMSUNG Q Series 138 cm (55 inch) QLED Ultra HD (4K) Smart Tizen TV  (55Q8C)",
            price : 344900,
            qty : 1,
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFnDSNZGmRzeHAeeqnloEZ65UkCrNCQnaE3fwlRjjlQ&s"
        }
        
    }
    decrHandler = ()=>{
        this.setState({
            product:{
                ...this.state.product , qty:this.state.product.qty - 1
            }
        })
    }
    incrHandler = ()=>{
        this.setState({
            product:{
                ...this.state.product , qty:this.state.product.qty + 1
            }
        })
    }
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-10">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product.product_Name}</td>
                                <td><img src={this.state.product.image} width="80px" alt="" /></td>
                                <td>{this.state.product.price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.product.qty} <i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.product.price * this.state.product.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>

    }
}
export default Product
