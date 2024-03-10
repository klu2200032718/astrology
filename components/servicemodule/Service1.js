import React from "react"
import Heading from "..//Heading"
import "./Featured1.css"
import ServiceCard1 from "./ServiceCard1"


const Service1 = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='TODAYS HOROSCOPE' subtitle='Check your todays horoscope' />
          <ServiceCard1 />
        </div>
      </section>
    </>
  )
}

export default Service1
