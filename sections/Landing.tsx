import Footer from '@/components/Footer'
import Header from '@/components/Navbar'
import Hero from '@/components/Hero'
import React from 'react'

function Landing() {
  return (
    <div className='bg-slate-100 min-h-screen'>
        <Header />
        <Hero />
        <Footer />
    </div>
  )
}

export default Landing