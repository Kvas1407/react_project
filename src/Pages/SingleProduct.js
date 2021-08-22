import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import singProduct from '../context/singleProduct'

const SingleProduct = () => {
    console.log('hello')
    const {slug} = useParams()
    const singleProduct= useContext(singProduct)
    const product = singleProduct.selectProduct(slug)

    console.log(product)
  
    const prod = product.find((product) => product.name === slug)
    return(
        
      <article className="product1">
      <header>
          <h3 className="h3-heading">Nike Air</h3>

          <section className="layout-product" id="productGallery">
              <img src="/ecomm-store-project/img/Product-Images/7.jpg" alt="" className="product-setting"/>
              <img src="/ecomm-store-project/img/Product-Images/8.jpg" alt="" className="product-setting"/>
              <img src="/ecomm-store-project/img/Product-Images/2.jpg" alt="Nike Air" className="img-shoe1" id="main"/>
          </section>
      </header>
         <section className="description-detail">

        <data value="39" className="para-product"><del>$90.00</del> <ins><b>$89.00</b></ins></data>
        <p className="para-product">Here is a shot of this product that might entice a user to click and add it to their cart.</p>
        <dl>
          <dt className="filtertype">Rating</dt>
          <dd>4.4 <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span></dd>
        </dl>
      
       
      <form>
        <fieldset>
          <legend className="filtertype">Colours</legend>
          <ul>
            <li className="color-radio"><label><input type="radio" name="colour" value="r"/> Red</label></li>
            <li className="color-radio"><label><input type="radio" name="colour" value="w" /> White</label></li>
            <li className="color-radio"><label><input type="radio" name="colour" value="b" /> Blue</label></li>
          </ul>
        </fieldset>
        <fieldset>
          <legend className="filtertype">Sizes</legend>
          <ol>
            <li  className="color-radio"><label><input type="radio" name="size" value="m"/> 9</label></li>
            <li  className="color-radio"><label><input type="radio" name="size" value="l"/> 9.5</label></li>
            <li  className="color-radio"><label><input type="radio" name="size" value="xl"/> 10</label></li>
          </ol>
        </fieldset>
      </form>
      <footer>
        <button type="button"><span className="material-icons">add_shopping_cart</span> Add to Cart</button>
        <button type="button"><span className="material-icons">favorite</span></button>
      </footer>
  </section>



      <p className="relevant-recommend">related products</p>

      <div className="relevant-images">

          <section>
              <img src="/ecomm-store-project/img/Product-Images/3.jpg" alt="" className="image-setting"/>
              <h3 className="h3-heading1">Channel Shoe</h3>
          </section>
          <section>
              <img src="/ecomm-store-project/img/Product-Images/4.jpg" alt="" className="image-setting"/>
              <h3 className="h3-heading1">Dior Shoe</h3>
          </section>
          <section>
              <img src="/ecomm-store-project/img/Product-Images/2.jpg" alt="" className="image-setting"/>
              <h3 className="h3-heading1">Nike Air</h3>
          </section>
          <section>
              <img src="/ecomm-store-project/img/Product-Images/1.jpg" alt="" className="image-setting"/>
              <h3 className="h3-heading1">Air Shoe</h3>
          </section>
      

      </div>
      </article>
    )
}
export default SingleProduct