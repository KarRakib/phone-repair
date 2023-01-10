import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import AddReview from '../Page/AddReview/AddReview'
import AddService from '../Page/AddService/AddService'
import Blogs from '../Page/Blogs/Blogs'
import Home from '../Page/Homes/Home/Home'
import ServiceDetails from '../Page/Homes/ServiceDetails/ServiceDetails'
import Services from '../Page/Homes/Services/Services'
import LogIn from '../Page/LogIn/LogIn'
import MyReview from '../Page/MyReview/MyReview'
import Register from '../Page/Register/Register'
import ProtectRouter from './ProtectRouter'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://review-server-gamma.vercel.app/slider'),
                
                
            },
            {
                path: '/services',
                loader: () => fetch('https://review-server-gamma.vercel.app/services'),
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({params}) => fetch(`https://review-server-gamma.vercel.app/services/${params.id}`),
                element : <ProtectRouter><ServiceDetails></ServiceDetails></ProtectRouter>


            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/aadservices',
                element:<AddService></AddService>
            },
            {
                path:'/addreview',
                element:<AddReview></AddReview>
            },
            {
                path:'/my-review',
                element: <MyReview></MyReview>
            }
        ]
    }
])




export default router