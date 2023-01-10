
import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

function Service({ service }) {
  const { cost, name, details, img, _id } = service
  return (
    <div className="card w-96 bg-base-100 my-5 shadow-xl rounded-md">
      <PhotoProvider>
        <PhotoView src={img}>
          <img className='rounded-md h-96 py-4' src={img} alt="" />
        </PhotoView>
      </PhotoProvider>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{details?.length > 100 ?
          <> {details.slice(0, 100) + '...'}<Link to={`/services/${_id}`}> Read More</Link> </> :
          <>{details} </>

        } </p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">$ {cost} </div>
          <Link to={`/services/${_id}`} > <button className="badge badge-outline">Details</button> </Link>
        </div>
      </div>

    </div>
  )
}

export default Service