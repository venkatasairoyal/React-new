import React, { Component } from "react";

class Clap extends Component{
    clickHandler(){
        console.log("Button Clicked");
    }
    render(){
        return(
            <div>
                <button onClicke={this.clickHandler}>Button Class</button>
                <button onClick={this.clickHandler()}>Button Class</button>
            </div>
        )
    }
}

export default Clap