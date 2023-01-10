import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../AuthContext/UserContext'

function Header() {
    const { user, userLogOut } = useContext(AuthContext)
    const logOut = () => {
        userLogOut()
            .then()
            .catch()
    }
    console.log(user);
    return (
        <div className="navbar bg-[#1f2937] text-white rounded-sm mb-5 mx-auto">
            <div className="flex-1">
            <img  className='rounded-lg w-32 lg:ml-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQq9rVEknTWiL7LZWCeOJCvFY0WTaPXE_-3w&usqp=CAU" alt="" href='/' />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    {user?.email
                        ?
                        <>
                            <li><Link to='/my-review'>My reviews</Link></li>
                            <li><Link to='/aadservices'>Add Services</Link></li>
                            <li> <button onClick={logOut} className="btn btn-outline">Log Out</button> </li>
                        </>
                        :

                        <li><Link to='/login'>Login</Link></li>
                    }

                    <li><Link to='/blogs'> Blogs  </Link></li>
                   
                </ul>
            </div>
        </div>
    )
}

export default Header