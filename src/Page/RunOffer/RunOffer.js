import React from 'react'

function RunOffer() {
    return (
        <div className='bg-dark'>
            <div className='text-center mb-7 '>
                <h2 className='lg:text-5xl text-lg font-bold w-full text-danger'> My Running Offer!!!!!</h2>
            </div>
            <div className='bg-current align-middle h-60 flex justify-center '>
                <div className="flex text-white mt-12 lg:gap-10 gap-3">
                    <div>
                        <span className="countdown font-mono lg:text-8xl text-base">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div>
                        <span className="countdown font-mono lg:text-8xl text-base">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div>
                        <span className="countdown font-mono lg:text-8xl text-base">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div>
                        <span className="countdown font-mono lg:text-8xl text-base">
                            <span style={{ "--value": 53 }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RunOffer