import React from 'react'
import Home from '../Home/Home'
import SHop from '../Shop/SHop'
import Blogs from '../Blogs/Blogs'
import PlantCare from '../PlantCare/PlantCare'

const Navlink = () => {
  return (
<nav className="nav">
 <Home/>
  <SHop/>
  <PlantCare/>
  <Blogs/>
</nav>
  )
}

export default Navlink