import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Corousel from '../Components/Corousel'

export default function HHome() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Corousel/></div>


      <div className = "m-3"><Card/></div>


      <div><Footer /></div>
    </div>
  )
}
