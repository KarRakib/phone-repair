import React, { useContext } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext/UserContext'

function ProtectRouter({children}) {
  const {user,loading} = useContext(AuthContext)
  const location = useLocation()
  if(loading){
    return <h1 className='text-2xl'> loading.... </h1>
  }
   if(!user){
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
   }
   return children;

}

export default ProtectRouter