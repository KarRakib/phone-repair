import React from 'react'
import './SliderItem.css'

function SliderItem({ slider }) {
    const { id, next, prev, img } = slider
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-[750px]">
            <div className='carousel-image'>
                <img src={img} alt="" className="w-full h-[750px] rounded-xl" />
            </div>
            <div className="absolute left-5 right-5 top-1/4  text-center">
                <h1 className='md:text-6xl text-lg leading-none  font-bold w-full text-white'>
                    Welcome Phone Repair. <br />
                    You break. <br />
                    We fix.
                </h1>
            </div>
            <div className="absolute flex text-center justify-center transform left-5 right-5  top-1/2">
                <p className='text-xl text-white'>Repair guides and disassembly information for phones from all manufacturers  <br /> and service providers, including Apple iPhone and Samsung Galaxy. Get everything you need to repair your phone yourself. <br />As technology advances, devices utilizing these technologies become smaller and smaller. Today's cell phones have more computing</p>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-3/4">
                <button className="btn btn-outline btn-warning">Repairing your Device</button>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    )
}

export default SliderItem