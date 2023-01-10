import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../AuthContext/UserContext'
import useTitle from '../../Hooks/UseTitle'

function Register() {
    useTitle('Register')
    const { userRegister, googleSignUp, userUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const handelSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        userRegister(email, password)
            .then(result => {
                const user = result.user
                handelProfileUpdate(name,photo)
                savedUser(email,name)
                console.log(user);
                form.reset()
                toast.success('Register Success')
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(error);


            });
    }
    const handelProfileUpdate = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        userUpdateProfile(profile)
            .then((data) => { 
                console.log('user', data);
                
            })
            .catch(error => console.error(error))
    }
    const signInGoogle = () => {
        googleSignUp()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const savedUser = (email,name) =>{
        const user = {email, name}
        fetch('https://review-server-gamma.vercel.app/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

    }
    return (
        <div className="hero min-h-screen relative bg-base-200">
            <h1 className="text-5xl font-bold top-0 hidden lg:block absolute lg:ml-10">Register now!</h1>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl lg:hidden font-bold">Register now!</h1>
                    <img className='rounded-lg h-4/5' style={{}} src="https://static7.depositphotos.com/1000941/740/i/950/depositphotos_7409150-stock-photo-phone-repair-on-white-background.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmit} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                        </div>
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
                                <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        {
                            error
                        }
                        <button onClick={signInGoogle} className='btn btn-outlet'> With Google</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register