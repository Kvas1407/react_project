import React, { useState } from 'react'
var cache = window.localStorage;

const ProductList = ({ data }) => {


  // let cartCount = cache.getItem('cartCount');
  // let wishlistCount = 0;

  // const addToCartClicked = () => {
  //   cartCount + 1;
  //   cache.setItem('cartCount', cartCount);
  //   console.log(cartCount);
  // }

  const { productName, productDescp, productPrice, productImage } = data

  const [img, setImg] = useState(``)
  import(`../img/${productImage}`).then((image) => setImg(image.default))

  return (

    <article className="product">
      <header>
        <a href="product.html" target="_blank"><img  src={img} alt={productDescp} className="img-shoe" /></a>
        <h3 className="h3-heading">{productName}</h3>
        <data value="39" className="para-product"><del>$90.00</del> <ins>${productPrice}</ins></data>
        <p className="para-product">Here is a shot of this product that might entice a user to click and add it to their cart.</p>
        {/* <div>
          <input type='button' value="Add To Cart" onClick={addToCartClicked()} style={{ color: 'white', backgroundColor: '#D54756' }}></input>
          <input type='button' value="Add to WishList" style={{ color: 'white', backgroundColor: '#D54756', marginLeft: '3px' }}></input>
        </div> */}
        <dl>
          <dt className="filtertype">Rating</dt>
          <dd>4.4 <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span></dd>
        </dl>
      </header>
    </article>

  )
}

export default ProductList