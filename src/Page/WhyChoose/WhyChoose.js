import React from 'react'

function WhyChoose() {
    return (
        <div>
            <div className="hero h-96 relative mt-6 my-6 bg-base-200">
                <h1 className='text-3xl text-purple-700 font-bold py-5 top-0 hidden lg:block absolute lg:ml-10'> Why Choose Me</h1>
                <div className="hero-content  flex-col lg:flex-row">
                    <div className="text-center w-1/2 pt-12 lg:text-left">
                        <img className='h-80' src="https://img.freepik.com/premium-vector/concept-mobile-phone-repair-horizontal-banner-with-smartphone-tools_198278-818.jpg?w=2000" alt="" />
                    </div>
                    <div className="card flex-shrink-0 mt-12 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body h-40 lg:h-80">
                            <h3 className='text-xl font-bold'>High-Quality Work </h3>

                            <h3 className='text-xl font-bold'>Meticulous Detail </h3>

                            <h3 className='text-xl font-bold'> Money Back Guarantee</h3>

                            <h3 className='text-xl font-bold'> Reliable and Fast</h3>

                            <h3 className='text-xl font-bold'>More than 5 years of experience </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose