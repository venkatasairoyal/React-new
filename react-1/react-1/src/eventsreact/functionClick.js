import React from "react";
function  Clicked (){
    function clickHandler(){
    console.log("Button pressed");
}
  return (
    <div>
        <button onClick={clickHandler}></button>
        <button onClick={clickHandler()}></button>
    </div>
  )
}
export default Clicked