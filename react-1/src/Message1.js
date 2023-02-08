class Message1 extends rc{
    state={
        msg:"hello"
    }      
    gmhandlor=()=>{
        this .setState
            msg:"rahul"
        
    }
    
    
render(){
    return<>
    <h1>{this.state.msg}</h1>
    <button onClick={this.gmhandlor}>gm</button>
</>
}

}
export default Message1