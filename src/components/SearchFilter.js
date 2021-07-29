import React from 'react'
import ProductList from './ProductList'

const SearchFilter = ({result}) => {

    console.log('products', result);
    const ProductArray = result.slice(0,20).map((product) => <ProductList key={product} data={product} />)
    
    

    return (

        <div className="container">
            {ProductArray}

            <p id="pageNumber">
               
                {ProductArray.length} {(ProductArray.length === 1) ? `product` : `products`} of {result.length}

                
            </p>
        </div>
    )
}

export default SearchFilter