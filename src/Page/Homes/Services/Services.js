import React from 'react'
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/UseTitle';
import Service from './Service';


function Services() {
  useTitle('Service')
  const services = useLoaderData()
 
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 auto-cols-auto mx-auto lg:max-w-7xl gap-4 bg-slate-300'>
      {
        services.map(service => <Service key={service._id} service={service}></Service>)
      }
    </div>
  )
}

export default Services