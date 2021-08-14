import React, { useState } from 'react'
import ProductList from './ProductList'


const SearchFilter = ({ result }) => {

    const [currPage, setCurrPage] = useState(1)
    const pageSize = 6;

    const startRow = (currPage - 1) * pageSize
    const endRow = startRow + pageSize
    const totalPages = Math.ceil(result.length / pageSize)

    console.log('products', result);
    const ProductArray = result.slice(startRow, endRow).map((product) => <ProductList key={product.prod_name} data={product} />)

    const updatePage = (page) => {
        if (page < 0)
            setCurrPage(1)
        else if (page > totalPages)
            setCurrPage(totalPages)
        else
            setCurrPage(page)
    }

    return (

        <div className="results">
            {ProductArray}

            <div style ={{alignContent:'center'}}>
                <p id="numProducts" style={{ backgroundColor: `Beige` }}>
                    <button onClick={() => updatePage(currPage - 1)} disabled={(currPage === 1) ? `disabled` : ``}>
                        <span className="material-icons">{'Previous Page <'}</span>
                    </button>
                    Showing {(ProductArray.length === 1) ? `product` : `products`} {startRow + 1} to {Math.min(endRow, result.length)} of {result.length}
                    <button onClick={() => updatePage(currPage + 1)} disabled={(currPage === totalPages) ? `disabled` : ``} >
                        <span className="material-icons">{'Next Page >'}</span>
                    </button>
                </p>
            </div>
        </div>
    )
}

export default SearchFilter