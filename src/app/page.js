"use client"

import Collection from '@/layout/Collection'
import DesignPhilosophy from '@/layout/DesignPhy'
import Features from '@/layout/Features'
import Fotter from '@/layout/Fotter'
import Header from '@/layout/Header'
import HeroSection from '@/layout/HeroSection'
import OurPromise from '@/layout/OurPromises'
import JewelryGallery from '@/layout/Styles'
import Subscribe from '@/layout/Subscribe'
import Testimonials from '@/layout/Testimonials'
import { showNotification } from '@/store/slices/Notification'
import { GoogleOAuthProvider } from '@react-oauth/google'

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'





function page() {
  
  
  return (
    <>
    <GoogleOAuthProvider clientId={"353961040142-ei35jd5muigpr1fcnl5ck6tbel2mp0ti.apps.googleusercontent.com"}>

    
    <HeroSection/>
    <Collection/>
    <Features/>
    <JewelryGallery/>
    <OurPromise/>
    <DesignPhilosophy/>
    <Testimonials/>
    <Subscribe/>
    </GoogleOAuthProvider>
   
   
    
    
    </>
  )
}

export default page