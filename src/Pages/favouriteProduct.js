import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import App from "../components/App";
import ProductList from "../components/ProductList";
import singleProduct from "../context/singleProduct";

const FavouriteProduct = () => {
    const { slug } = useParams();

    let products = [
        {
            id: 0,
        productName: 'Nike Air',
        productDescp: 'A product of NIKE',
        productPrice: '$89',
        productImage: 'Product-Images/1.jpg'
        },
        {
            id: 1,
        productName: 'Air Shoe',
        productDescp: 'A product of AIR',
        productPrice: '$79',
        productImage: 'Product-Images/2.jpg'
        },
        {
            id: 2,
        productName: 'Channel Shoe',
        productDescp: 'A product of CHANNEL',
        productPrice: '$69',
        productImage: 'Product-Images/3.jpg'
        },
        {
            id: 3,
        productName: 'Dior Shoe',
        productDescp: 'A product of DIOR',
        productPrice: '$63',
        productImage: 'Product-Images/4.jpg'
        },
        {
            id: 4,
        productName: 'Vans',
        productDescp: 'A product of VANS',
        productPrice: '$59',
        productImage: 'Product-Images/5.jpg'
        },
        {     
            id: 5,   
        productName: 'Adidas',
        productDescp: 'A product of ADIDAS',
        productPrice: '$44',
        productImage: 'Product-Images/6.jpg'
        
        },
        {        
            id: 6,
          productName: 'Puma',
          productDescp: 'A product of PUMA',
          productPrice: '$84',
          productImage: 'Product-Images/7.jpg'
          
        },
        {        
            id: 7,
            productName: 'Seveteenth Day',
            productDescp: 'A product of SEVENTEENTH DAY',
            productPrice: '$64',
            productImage: 'Product-Images/8.jpg'
            
        },
        {        
            id: 8,
              productName: 'Old Skool',
              productDescp: 'A product of OLD SKOOL',
              productPrice: '$86',
              productImage: 'Product-Images/9.jpg'
              
        },
        {        
            id: 9,
              productName: 'Under Armour',
              productDescp: 'A product of UNDER ARMOUR',
              productPrice: '$91',
              productImage: 'Product-Images/10.jpg'
              
        },
        {        
            id: 10,
              productName: 'Gucci',
              productDescp: 'A product of GUCCI',
              productPrice: '$93',
              productImage: 'Product-Images/11.jpg'
              
        },
        {        
            id: 11,
              productName: 'Tommy Hilfiger',
              productDescp: 'A product of TOMMY HILFIGER',
              productPrice: '$54',
              productImage: 'Product-Images/12.jpg'
              
        },
        {        
            id: 12,
              productName: 'Lace Up',
              productDescp: 'A product of LACE UP',
              productPrice: '$77',
              productImage: 'Product-Images/13.jpg'
              
        },
        {        
            id: 13,
              productName: 'Sketchers',
              productDescp: 'A product of SKETCHERS',
              productPrice: '$77',
              productImage: 'Product-Images/14.jpg'
              
        },
        {        
            id: 14,
              productName: 'Camper Chasis',
              productDescp: 'A product of CAMPER CHASIS',
              productPrice: '$57',
              productImage: 'Product-Images/15.jpg'
              
        },
        {        
            id: 15,
              productName: 'Ted baker',
              productDescp: 'A product of TED BAKER',
              productPrice: '$67',
              productImage: 'Product-Images/16.jpg'
              
        },
        {        
            id: 16,
              productName: 'Banana Republic',
              productDescp: 'A product of BANANA REPUBLIC',
              productPrice: '$87',
              productImage: 'Product-Images/17.jpg'
              
        },
        {        
            id: 17,
              productName: 'Michael Kors',
              productDescp: 'A product of MICHAEL KORS',
              productPrice: '$37',
              productImage: 'Product-Images/18.jpg'
              
        },
        {        
            id: 18,
              productName: 'Delray',
              productDescp: 'A product of DELRAY',
              productPrice: '$97',
              productImage: 'Product-Images/19.jpg'
              
        },
        {        
            id: 19,
              productName: 'Emilien Slip-On',
              productDescp: 'A product of EMILIEN SLIP ON',
              productPrice: '$27',
              productImage: 'Product-Images/20.jpg'
              
        },
        {        
            id: 20,
            productName: 'Emilien Slip-Up',
            productDescp: 'A product of EMILIEN SLIP ON',
            productPrice: '$57',
            productImage: 'Product-Images/21.jpg'
            
      }
    ]

    const user = useContext(singProduct).data;
    const favArr = user.favourites;

    let favItem;
    const favDisplay = favArr.map((favProd) => {
        favItem = products.find((prod) => prod.id.toString() === favProd);
        // console.log("favItem", favItem);
        return <Product key={favItem.id} product={favItem} />;
    });

    return (
        <Layout>
            <section className="products">
                <h2>Hurray! You are in the Favourites Page. See the Homepage to add more products into your favourite cart.</h2>
                {favDisplay.length > 0
                    ? favDisplay
                    : "No favourites Selected!"}
            </section>
        </Layout>
    );
};

export default FavouriteProduct;