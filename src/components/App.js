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
        
        },
        {        
          productName: 'Puma',
          productDescp: 'A product of PUMA',
          productPrice: '$84',
          productImage: 'Product-Images/6.jpg'
          
        },
        {        
            productName: 'Seveteenth Day',
            productDescp: 'A product of SEVENTEENTH DAY',
            productPrice: '$64',
            productImage: 'Product-Images/6.jpg'
            
        },
        {        
              productName: 'Old Skool',
              productDescp: 'A product of OLD SKOOL',
              productPrice: '$86',
              productImage: 'Product-Images/6.jpg'
              
        },
        {        
              productName: 'Under Armour',
              productDescp: 'A product of UNDER ARMOUR',
              productPrice: '$91',
              productImage: 'Product-Images/6.jpg'
              
        },
        {        
              productName: 'Gucci',
              productDescp: 'A product of GUCCI',
              productPrice: '$93',
              productImage: 'Product-Images/6.jpg'
              
        },
        {        
              productName: 'Tommy Hilfiger',
              productDescp: 'A product of TOMMY HILFIGER',
              productPrice: '$54',
              productImage: 'Product-Images/6.jpg'
              
        },
        {        
              productName: 'Lace Up',
              productDescp: 'A product of LACE UP',
              productPrice: '$77',
              productImage: 'Product-Images/6.jpg'
              
        },
        {        
              productName: 'Sketchers',
              productDescp: 'A product of SKETCHERS',
              productPrice: '$77',
              productImage: 'Product-Images/6.jpg'
              
        },
        {        
              productName: 'Camper Chasis',
              productDescp: 'A product of CAMPER CHASIS',
              productPrice: '$57',
              productImage: 'Product-Images/6.jpg'
              
        },
        {        
              productName: 'Ted baker',
              productDescp: 'A product of TED BAKER',
              productPrice: '$67',
              productImage: 'Product-Images/6.jpg'
              
        },
        {        
              productName: 'Banana Republic',
              productDescp: 'A product of BANANA REPUBLIC',
              productPrice: '$87',
              productImage: 'Product-Images/6.jpg'
              
        },
        {        
              productName: 'Michael Kors',
              productDescp: 'A product of MICHAEL KORS',
              productPrice: '$37',
              productImage: 'Product-Images/6.jpg'
              
        },
        {        
              productName: 'Delray',
              productDescp: 'A product of DELRAY',
              productPrice: '$97',
              productImage: 'Product-Images/6.jpg'
              
        },
        {        
              productName: 'Emilien Slip-On',
              productDescp: 'A product of EMILIEN SLIP ON',
              productPrice: '$27',
              productImage: 'Product-Images/6.jpg'
              
        }
    ]

    return ( 
        <Product data={products} />
      )
    }

    export default App