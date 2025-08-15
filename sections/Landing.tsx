import Footer from '@/components/Footer'
import FooterBanner from '@/components/FooterBanner'
import Hero from '@/components/Hero'
import Main from '@/components/MainSection'
import Navbar from '@/components/Navbar'
import React from 'react'

function Landing() {
  return (
    <div className='bg-slate-100 min-h-screen overflow-x-clip'>
        <Navbar />
        <Hero />
        <Footer />
        <FooterBanner />
    </div>
  )
}

export default Landing