import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import ReactImageZooom from 'react-image-zooom';
import AddReview from '../../AddReview/AddReview';
import ShowReview from '../../ShowReview/ShowReview';
import useTitle from '../../../Hooks/UseTitle';
import { AuthContext } from '../../../AuthContext/UserContext';
import { useQuery } from '@tanstack/react-query'

function ServiceDetails() {
    const showDetails = useLoaderData()
    useTitle('ServiceDetails')
    const { cost, img, name, _id, details } = showDetails
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch(`https://review-server-gamma.vercel.app/reviews/${_id}`)
            const data = await res.json()
            return data
        }
    })
    // const handelDelete = id => {
    //   const confirm = window.confirm('Are Your Sure')
    //   if (confirm) {
    //     fetch(`https://review-server-gamma.vercel.app/reviews/${id}`, {
    //       method: 'DELETE'
    //     })
    //       .then(res => res.json())
    //       .then(data => {
    //         if (data.deletedCount > 0) {
    //           const remaining = tooo.filter(de => de._id !== id)
    //           setDeleted(remaining)
    //         }
    //         console.log(data)
    //       })
    //   }
    // }
    // const handleStatusUpdate = id => {
    //     fetch(`https://review-server-gamma.vercel.app/orders/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json',

    //         },
    //         body: JSON.stringify({ status: 'Approved' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 const remaining = tooo.filter(odr => odr._id !== id);
    //                 const approving = tooo.find(odr => odr._id === id);
    //                 approving.status = 'Approved'

    //                 const newOrders = [approving, ...remaining];
    //                 setDeleted(newOrders);
    //             }
    //         })
    //     }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 m-auto'>
                <div >
                    <div style={{ width: '450px' }} className="card card-compact w-1/2 bg-slate-200 shadow-2xl border-red-400 mx-auto">
                        <ReactImageZooom src={img} ></ReactImageZooom>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">{name} </h2>
                            <p className='text-sm hover:text-xl'>{details} </p>
                            <div className="card-actions justify-between">
                                <div className="badge badge-outline text-base">$ {cost} </div>
                            </div>
                        </div>
                    </div>
                    {/* <Link to={`/services/${_id}`} > <button className="badge badge-outline">Details</button> </Link> */}
                </div>
                <AddReview showDetails={showDetails} refetch={refetch} ></AddReview>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>Feedback</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        reviews?.map(review => <ShowReview key={review._id} refetch={refetch} handelDelete={"handelDelete"} review={review} handleStatusUpdate={"handleStatusUpdate"} ></ShowReview>)
                    }
                </table>
            </div>
        </div>
    )
}

export default ServiceDetails
// 