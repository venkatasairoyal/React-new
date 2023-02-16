import React, { Component } from "react";
import Sai1 from "./sai1";
class Sai2 extends Component{
    Hero="Balayya";
    Remunaration=2000000000000;
    movie="Verasimhareddy"

    render(){
        return (
            <h1>
                <Sai1 Hero={this.Hero} Remunaration={this.Remunaration} movie={this.movie}/>
            </h1>
        )
    }
}
export default Sai2