import React, { useEffect, useState } from 'react'
import Slider from '../Slider/Slider'
import RunOffer from "../../RunOffer/RunOffer";
import WhyChoose from '../../WhyChoose/WhyChoose';
import useTitle from '../../../Hooks/UseTitle';
import Service from '../Services/Service';
import { Link } from 'react-router-dom';


function Home() {
  useTitle('Home')

  const [services, setServices] = useState()
  useEffect(() => {
    fetch('https://review-server-gamma.vercel.app/service')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  // console.log(services);
  return (
    <div>
      <Slider></Slider>
      <RunOffer></RunOffer>
      <div>
        <div className='grid grid-cols-1 lg:grid-cols-3 mb-5  bg-slate-300 mx-auto lg:max-w-7xl'>
          {
            services?.map(service => <Service key={service._id} service={service}></Service>)
          }

        </div>
      
        <Link to='/services'><button  style={{marginLeft: '50%'}} className='btn'> See All</button> </Link>
        
        
      </div>
      
      <WhyChoose></WhyChoose>
    </div>
  )
}

export default Home