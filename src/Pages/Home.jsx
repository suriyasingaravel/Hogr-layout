import React from 'react'
import Heading from '../Components/Heading'
import MidSection from '../Components/MidSection'

import Followers from '../Components/Followers'
import Menu from '../Components/Menu'
import SearchBar from '../Components/SearchBar'
import ProductListing from '../Components/ProductListing'

const Home = () => {
  return (
    <div style={{maxWidth:"430px",  margin:"auto", backgroundColor:"black", borderRadius:"20px"}}>
      <Heading/>
      <MidSection />
      <Followers/>
      <Menu/>
      <SearchBar/>
      <ProductListing/>

    </div>
  )
}

export default Home