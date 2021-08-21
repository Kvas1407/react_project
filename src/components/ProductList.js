import React, { useState } from 'react'
import singleProduct from '../context/singleProduct'
import {Link} from 'react-router-dom'

const ProductList = ({ data }) => {


   const { productName, productDescp, productPrice, productImage } = data

  const [img, setImg] = useState(``)
  import(`../img/${productImage}`).then((image) => setImg(image.default))

  

  return (
    
   
    <article className="product">
       
      <header classname="productsNew">
                <Link to={`/product/${productName}`} target="_blank"><img  src={img} alt={productDescp} className="img-shoe" />
                <div className="overlay">view more</div>
                </Link>
        <h3 className="h3-heading">{productName}</h3>
        <data value="39" className="para-product"><del>$90.00</del> <ins>{productPrice}</ins></data>
        <p className="para-product">Here is a shot of this product that might entice a user to click and add it to their cart.</p>
        
        
        <dl>
          <dt className="filtertype">Rating</dt>
          <dd>4.4 <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span></dd>
        </dl>

        <form>
          <fieldset>
            <legend className="filtertype">Colours</legend>
            <ul>
              <li class="color-radio"><label><input type="radio" name="colour" value="r"/> Red</label></li>
              <li class="color-radio"><label><input type="radio" name="colour" value="w" /> White</label></li>
              <li class="color-radio"><label><input type="radio" name="colour" value="b" /> Blue</label></li>
            </ul>
          </fieldset>
          <fieldset>
            <legend class="filtertype">Sizes</legend>
            <ol>
              <li  class="color-radio"><label><input type="radio" name="size" value="m"/> 9</label></li>
              <li  class="color-radio"><label><input type="radio" name="size" value="l"/> 9.5</label></li>
              <li  class="color-radio"><label><input type="radio" name="size" value="xl"/> 10</label></li>
            </ol>
          </fieldset>
        </form>
        <footer>
          <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
          <button type="button"><span class="material-icons" onClick={() => addingToCart(productName)}>favorite</span></button>
        </footer>
        
      </header>
    </article>

  )
}

export default ProductList