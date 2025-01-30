import React from 'react'
import Search from '../Search/Search'
import Login from '../Login/Login'
import shop from '../../assets/shop.png'

const Actions = () => {
  return (
    <div className="actions">
<Search/>
<img src={shop} alt="shop img" />

<Login/>
</div>
  )
}

export default Actions