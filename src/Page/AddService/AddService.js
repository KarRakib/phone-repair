import React from 'react'
import { toast } from 'react-toastify';

function AddService() {
    const handelSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.title.value;
        const img = form.image.value;
        const cost = form.price.value;
        const details = form.description.value;
        console.log(name, img, cost, details);
        const addSevices = {
            
            name,
            img,
            cost,
            details
        } 
        fetch('https://review-server-gamma.vercel.app/services',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(addSevices)
        })
        toast.success('Add')
        form.reset()
    }
    return (
        <div className='justy'>

            <form onSubmit={handelSubmit} className='w-1/2 mx-auto'>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Service Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name='image' placeholder="Image URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name='description' placeholder="Description" className="input input-bordered" />
                </div>
                <button type="submit">Add</button>
            </form>

        </div>
    )
}

export default AddService