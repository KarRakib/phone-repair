import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SliderItem from './SliderItem'

function Slider() {
  const sliders = useLoaderData()
  // console.log(sliders);
  return (
    <div className="carousel w-full py-10">
    {
      sliders.map(slider=><SliderItem key={slider.id} slider={slider}></SliderItem>)
    }
    </div>
  )
}

export default Slider