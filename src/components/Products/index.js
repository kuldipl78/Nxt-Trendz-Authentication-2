import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'
import './index.css'

const Products = () => {
  
  const jwtToken = Cookies.get('jwt_token')
  if(jwtToken === undefined){
    return <Redirect to='/login'/>
  }
  
  return (
    <>
      <Header />
      <div className="product-container">
        <img
          className="product-img"
          alt="products"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        />
      </div>
    </>
  )
}
export default Products
