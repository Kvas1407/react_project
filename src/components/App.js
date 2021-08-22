import React, { useState, useEffect } from "react";
import Product from '../Pages/Product'
import singProduct from '../context/singProduct'
import SingleProduct from '../Pages/SingleProduct'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import FavouriteProduct from "../Pages/favouriteProduct";
import AddCart from "../Pages/AddtoCart";


const App = () => {
	const products= [
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

    // fetch() my user data, ensure it's on every page
    const [userData, setUserData] = useState({
      id: 2269986506,
      username: `KeerthivasanKumar`,
      favourites: [],
      cart: [],
  });

    const toggleFavourite = (id) => {
      console.log("Enter toggle Fav");
      if (userData.favourites.includes(id)) {
          // Slice out a
          // console.log("Remove toggle Fav");
          setUserData({
              ...userData,
              favourites: userData.favourites.filter((fav) => fav !== id),
          });
      } else {
          // Add it in
          // console.log("Add toggle Fav");
          setUserData({
              ...userData,
              favourites: [...userData.favourites, id],
          });
      }

      console.log("userData", userData);
  };


  const addToCart = (id) => {
      console.log("Add to cart");
      const index = userData.cart.findIndex((val) => val.id === id);

      if (index === -1)
          // product not found in the cart
          userData.cart.push({ id: id, count: 1 });
      else userData.cart[index].count++; // increase the "count" by +1

      setUserData({
          ...userData,
          cart: [...userData.cart],
      });
  };

  console.log("userData", userData);
  
  
      // const productView= document.querySelector(SingleProduct)

      return (
      <Router>
          <singProduct.Provider value={{
                    data: userData,
                    toggleFavourite: toggleFavourite,
                    addToCart: addToCart,
                }}
                >
          <Switch>
          <Route exact path="/"><Product data={products} /></Route>
          <Route exact path="/product/:slug"><SingleProduct /></Route>
          
                    <Route path="/favouriteProd">
                        <FavouriteProduct />
                    </Route>
                    <Route path="/cartItem">
                        <AddCart />
                    </Route>
          </Switch>
          </singProduct.Provider>
      </Router>
  )
    }

    export default App