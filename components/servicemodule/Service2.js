import React from "react"
import Heading from "..//Heading"
import "./Featured1.css"
import ServiceCard2 from "./ServiceCard2"

const Service2 = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Festival Calendar 2023' subtitle='Indian Festivals & Holidays' />
          <ServiceCard2 />
        </div>
      </section>
    </>
  )
}

export default Service2
