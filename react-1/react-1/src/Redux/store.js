import productReducer from './Products/product.reducer'
import{createStore} from 'redux'
let store =createStore(productReducer)
export {store}