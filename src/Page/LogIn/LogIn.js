import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthContext/UserContext';
import useTitle from '../../Hooks/UseTitle';

function LogIn() {
    useTitle('LogIn')
    const { userLogin,googleSignUp } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const handelSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userLogin(email, password)
            .then(result => {
                const user = result.user
               toast.success('Login Success')
                navigate(from, {replace: true})
                form.reset()
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(error);
            });
    }
    const signInGoogle = () =>{
        googleSignUp()
        .then(()=> {})
        .catch(error => console.error(error))
    }
    return (
        <div className="hero min-h-screen relative bg-base-200">
            <h1 className="text-5xl font-bold top-0 hidden lg:block absolute lg:ml-10">Log In now!</h1>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl lg:hidden font-bold">Log In now!</h1>
                    <img className='rounded-lg h-4/5' style={{}} src="https://static7.depositphotos.com/1000941/740/i/950/depositphotos_7409150-stock-photo-phone-repair-on-white-background.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmit} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className='text-center'>Phone Repair <Link className='text-orange-600 font-bold' to="/register">Sign Up</Link> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <button onClick={signInGoogle} className='btn btn-outlet'> With Google</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LogIn