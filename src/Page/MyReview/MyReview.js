import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AiTwotoneEdit } from "react-icons/ai";
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthContext/UserContext';
import ReviewUpdate from '../../Component/ReviewUpdate';

const MyReview = () => {
    const { user } = useContext(AuthContext)
   
    const {data : myReviews = [], refetch} = useQuery({
        queryKey:['myReviews'],
        queryFn: async ()=>{
            const res = await fetch(`https://review-server-gamma.vercel.app/reviews?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
       const handelUpdate = (id) =>{
        console.log(id);
    }
const handleDelete = (id) =>{
  
        fetch(`https://review-server-gamma.vercel.app/reviews/${id}`,{
          method:'DELETE',
          
      })
      .then(res => res.json())
      .then( data =>{
          if( data.deletedCount === 1){
              toast.success('Delete Success')
              refetch()
          }
      } )
    
}
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                     {
                        myReviews.map((review, i) => <tr key={review._id}>
                        <th>{i+1} </th>
                        <td>{review.name} </td>
                        <td>{review.feedback} <button > <ReviewUpdate review={review}/> <label onClick={()=> handelUpdate(review._id)} htmlFor="review-modal" className=""><AiTwotoneEdit/></label></button></td>
                        <td ><button onClick={()=>handleDelete(review._id)}>Delete</button> </td>
                    </tr>)
                    
                     }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;