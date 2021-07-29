import React from 'react'
import Product from '../Pages/Product'

const App = () => {
	const products= [
        {
        productName: 'Nike Air',
        productDescp: 'A product of NIKE',
        productPrice: '$89',
        productImage: 'Product-Images/1.jpg'
        },
        {
        productName: 'Air Shoe',
        productDescp: 'A product of AIR',
        productPrice: '$79',
        productImage: 'Product-Images/2.jpg'
        },
        {
        productName: 'Channel Shoe',
        productDescp: 'A product of CHANNEL',
        productPrice: '$69',
        productImage: 'Product-Images/3.jpg'
        },
        {
        productName: 'Dior Shoe',
        productDescp: 'A product of DIOR',
        productPrice: '$63',
        productImage: 'Product-Images/4.jpg'
        },
        {
        productName: 'Vans',
        productDescp: 'A product of VANS',
        productPrice: '$59',
        productImage: 'Product-Images/5.jpg'
        },
        {        
        productName: 'Adidas',
        productDescp: 'A product of ADIDAS',
        productPrice: '$44',
        productImage: 'Product-Images/6.jpg'
        
        }
    ]

    return ( 
        <Product data={products} />
      )
    }

    export default App