"use client"

import React, { Suspense } from 'react'

const Landingpage = React.lazy(() => import('@/pages/Landingpage'))
const SecondSection = React.lazy(() => import('@/pages/SecondSection'))
const Ingredients = React.lazy(() => import('@/pages/Ingredients'))
const Blog = React.lazy(() => import('@/pages/Blog'))
const Footer = React.lazy(() => import('@/pages/Footer'))

const page = () => {
  return (
    <>
      <Suspense>
        <div style={{backgroundColor:"aquablue", padding:"2rem 1.5rem"}}>
        <Landingpage/>
        <SecondSection/> 
        <Ingredients/>
        <Blog/>
        </div>
       
       
        <Footer/>
      </Suspense>
    </>
  )
}

export default page