import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/login.jpg'

const Login = () => {
    return (
        <div>
             <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className="rounded-lg w-96" src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                        {/* {error} */}
                    </form>
                    <p className='text-center'>New to Moment Maker?<Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link> </p>

                
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;