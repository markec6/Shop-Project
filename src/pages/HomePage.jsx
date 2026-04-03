import React from 'react'
import CatProducts from '../components/CatProducts'
import Hero from '../components/Hero'
import ExploreShop from '../components/ExploreShop'
import Badges from '../components/Badges'
import Testimonials from '../components/Testimonials'
import Colaborations from '../components/Colaborations'

function HomePage() {
  return (
    <>
    <Hero/>
    <CatProducts/>
    <ExploreShop/>
    <Badges/>
    <Testimonials/>
    <Colaborations/>
    </>
  )
}

export default HomePage