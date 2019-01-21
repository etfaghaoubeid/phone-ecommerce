import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value=>{
          const {id,company,img,info ,price ,title,incart} = value.detailProduct;
          return(
            <div className="container py-5">
            <div className="row"> 
              <div className="col-10 xm-auto text-center-text-blue text-slanted my-5">
              <h1>{title }</h1>
              </div>
            </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
