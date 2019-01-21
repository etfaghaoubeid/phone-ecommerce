import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'
const ProductContext = React.createContext()
//provider 
//consumer

export default class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct

    }
    componentDidMount(){
      this.setProducts()
    }
    setProducts = ()=>{
      let tempProducts= []
      storeProducts.forEach(product=>{
        const singleProduct ={...product}
        tempProducts=[...tempProducts,singleProduct]
      })
      this.setState(()=>{
        return {products:tempProducts}
      })
    }
     handleDetail = ()=>{
        console.log('handle detail');
      }
      addToCard= ()=>{
        console.log('add to card');
       }
  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state,
          handleDetail:this.handleDetail,
          addToCard:this.addToCard
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer,ProductProvider}