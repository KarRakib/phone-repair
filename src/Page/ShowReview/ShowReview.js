import React from 'react'

function ShowReview({ review, refetch }) {
  const {  feedback, email,  user } = review;
  // const handleDelete = () =>{
  //   fetch(`https://review-server-gamma.vercel.app/reviews/${_id}`,{
  //     method:'DELETE',

  // })
  // .then(res => res.json())
  // .then( data =>{
  //     if( data.deletedCount === 1){
  //         toast.success('Delete Success')
  //         refetch()
  //     }
  // } )
  // }

  return (
    <tbody>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{user} </div>
            </div>
          </div>
        </td>
        <td>
          {email}
        </td>
        <td>{feedback} </td>
      </tr>
    </tbody>
  )
}

export default ShowReview