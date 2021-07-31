import React, {useState} from 'react'

const ProductList = ({data}) => {

  const {productName,productDescp,productPrice,productImage} = data

  const [img, setImg] = useState(``)
  import (`../img/Product-images/${productImage}`).then((image) => setImg(image.default))

  return (

<article className="product"> 
     <header>
            <a href="product.html" target="_blank"><img src={img} alt={productDescp} className="img-shoe"/></a>
            <h3 className="h3-heading">{productName}</h3>
            <data value="39" className="para-product"><del>$90.00</del> <ins>${productPrice}</ins></data>
            <p className="para-product">Here is a shot of this product that might entice a user to click and add it to their cart.</p>
            <dl>
              <dt className="filtertype">Rating</dt>
              <dd>4.4 <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span></dd>
            </dl>
          </header>
          </article>

          )
}

export default ProductList