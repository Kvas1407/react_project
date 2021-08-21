import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import singProduct from '../context/singleProduct'

const SingleProduct = () => {
    console.log('hello')
    const {slug} = useParams()
    const singleProduct= useContext(singProduct)
    // const product = singleProduct.selectProduct(slug)

    // console.log(product)
    // updating product page with correct book
    // const prod = product.find((product) => product.name === slug)
    return(
        <>
        </>
    )
}
export default SingleProduct