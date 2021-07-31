import React, {useState} from 'react'
import Layout from '../components/Layout'
import SearchFilter from '../components/SearchFilter'

const product = ({data}) => {

    const [searchState, setSearchState] = useState({
        query: ``,
        minPrice: 0,
        methods: [],
        sort: (a, b) => a.productPrice - b.productPrice
      })


      const {query, minPrice, sort} = searchState

      const priceSort = (event) => {
           
        setSearchState({
          ...searchState,
          minPrice: Number(event.target.value),
        })
      }

//console.log(minPrice + "minPrice")
   const searchFilter = data
   .filter(({productPrice}) => parseInt(productPrice.substring(1)) >= minPrice)
    .filter(({productName}) => productName.toUpperCase().includes(query.toUpperCase()))
    .filter(({filtertype}) => searchState.methods.length === 0 || 
    filtertype.filter((method) => searchState.methods.includes(method)).length > 0)
    .sort(sort)
  
  const eventChange = (event) => {  
    setSearchState({
      ...searchState,
      query: event.target.value
    })
  }

   
 const targetSwap = ({target}) => {
    let sorting
    if (target.value === "0") {
      sorting = (a, b) => a.productPrice - b.productPrice
    } else if (target.value === "1") {
      sorting = (a, b) => b.productPrice - a.productPrice
    }

    setSearchState({
      ...searchState,
      sort: sorting
    })
  }

  const swapState = ({target}) => {
    
    if (target.checked) {
      setSearchState({
        ...searchState,
        methods: [...searchState.methods, target.value]
      })
    } else {
      setSearchState({
        ...searchState,
        methods: searchState.methods.filter((method) => method !== target.value)
      })
    }
  }

  

  return (
    <Layout>

<form className="filters">
    <h2>Filters</h2>
 <div className="search-div">
          <fieldset className="search">
            <input type="search" name="search" id="filterResults" autoComplete="off" onChange={eventChange} value={query}/>
          </fieldset>
          <fieldset>
          <select name="sort" id="sort" defaultValue="0" onChange={targetSwap}>
            <option value="1">Price, highest to lowest</option>
            <option value="0">Price, lowest to highest</option>
            <option value="newest">Latest Arrivals</option>
          </select>
        </fieldset>
        <fieldset className="slider">
          <label htmlFor="filterPrice">Price:</label>
          <input type="range" name="price" id="filterPrice" value={minPrice} min="0" max="100" step="0.1" onChange={priceSort}/>
          <output htmlFor="filterPrice">{minPrice.toFixed(1)}</output>
        </fieldset>
        </div>

    <div className="filter-options">

      <fieldset onChange={swapState}>
        <legend className="filtertype">Colour</legend>
        <ul className="filter-list">
          <li><input type="checkbox" name="colour" value="black" id="black"/> <label htmlFor="black">Black</label></li>
          <li><input type="checkbox" name="colour" value="white" id="white"/> <label htmlFor="white">White</label></li>
          <li><input type="checkbox" name="colour" value="grey" id="grey"/> <label htmlFor="grey">Grey</label></li>
          <li><input type="checkbox" name="colour" value="red" id="red"/> <label htmlFor="red">Red</label></li>
          <li><input type="checkbox" name="colour" value="blue" id="blue"/> <label htmlFor="blue">Blue</label></li>
        </ul>
      </fieldset>

      <fieldset>
        <legend className="filtertype">Sizes</legend>
        <ol className="filter-list">
          <li><input type="checkbox" name="size" value="xs" id="xs"/> <label htmlFor="xs">7</label></li>
          <li><input type="checkbox" name="size" value="sm" id="sm"/> <label htmlFor="sm">8</label></li>
          <li><input type="checkbox" name="size" value="md" id="md"/> <label htmlFor="md">9</label></li>
          <li><input type="checkbox" name="size" value="lg" id="lg"/> <label htmlFor="lg">10</label></li>
          <li><input type="checkbox" name="size" value="xl" id="xl"/> <label htmlFor="xl">11</label></li>
        </ol>
      </fieldset>
      <fieldset>
        <legend className="filtertype">Ratings (above)</legend>
        <ol className="filter-list">
          <li>
            <input type="radio" name="rating" value="4" id="aboveFour"/>
            <label htmlFor="aboveFour">
              <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span>
            </label>
          </li>
          <li>
            <input type="radio" name="rating" value="3" id="aboveThree"/>
            <label htmlFor="aboveThree">
              <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
            </label>
          </li>
          <li>
            <input type="radio" name="rating" value="2" id="aboveTwo"/>
            <label htmlFor="aboveTwo">
              <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
            </label>
          </li>
          <li>
            <input type="radio" name="rating" value="1" id="aboveOne"/>
            <label htmlFor="aboveOne">
              <span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
            </label>
          </li>
        </ol>
      </fieldset>
    </div>
    <fieldset>
      <label htmlFor="sort" className="filtertype">Show</label>
      <select name="sort" id="sort">
        <option value="price-high">Price, highest to lowest</option>
        <option value="price-low">Price, lowest to highest</option>
        <option value="newest">Newest releases</option>
      </select>
    </fieldset>
  </form>

  <SearchFilter result={searchFilter}/>


</Layout>

)
}

export default product