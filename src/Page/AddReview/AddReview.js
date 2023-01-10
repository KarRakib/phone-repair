import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthContext/UserContext'

function AddReview({ showDetails, refetch }) {
    const { _id, name, img } = showDetails
    console.log('pada', showDetails);
    const { user } = useContext(AuthContext)
    const handelSubmit = (e, id) => {
        e.preventDefault()
        const form = e.target
        const feedback = form.feedback.value
        const user = form.name.value
        const email = form.email.value
        console.log(feedback, user, email);
        const review = {
            service: _id,
            name,
            img,
            feedback,
            user: user.displayName,
            email,
            image: user.photoURL

        }

        fetch('https://review-server-gamma.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })

            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('review add')
                    refetch()
                }
                console.log(data)
            })
    }

    return (
        <div>
            <h3 className='text-4xl text-slate-400 mb-5'>Your valuable feedback about my service </h3>
            <form onSubmit={handelSubmit}>
                <textarea name='feedback' className="textarea textarea-bordered h-36 mb-3 w-72" placeholder="Your Feedback"></textarea> <br />
                <input type="name" name='name' placeholder="Your name" className="input input-bordered input-primary w-full max-w-xs" defaultValue={user?.displayName} /> <br />
                <input type="email" name='email' placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs" defaultValue={user?.email} /> <br />
                <button type="submit" className="btn btn-success mt-5"> Add Review</button>
            </form>
        </div>
    )
}

export default AddReview  