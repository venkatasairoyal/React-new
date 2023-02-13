import React from "react";
import {incrAction,decrAction} from '../Redux/Products/product.action'
import {useDispatch,useSelector} from 'react-redux'

let Product=()=>{
  let dispatch=useDispatch()
  let product = useSelector((state) => {
    return state
}) 
let incrHandler = () => {
  dispatch(incrAction())
}
let decrHandler = () => {
  dispatch(decrAction())
}
  return <div>
    {/* <i className="fa fa-minus-circle" onClick={decrHandler}></i>{product.qty}<i className="fa fa-plus-circle" onClick={incrHandler} ></i> */}
     
    <button onClick={decrHandler}><i className="fa fa-minus-circle" ></i></button>
    {product.qty}
    <button onClick={incrHandler}><i className="fa fa-plus-circle" ></i></button>
  </div>
}
export default Product