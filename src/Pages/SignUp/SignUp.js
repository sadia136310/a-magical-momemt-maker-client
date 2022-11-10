import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import img from '../../images/login.jpg'


const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    const [error, setError] = useState('');

    const location=useLocation();
    const navigate=useNavigate();
    const from = location.state?.from?.pathname || "/";
  
    useTitle('Sign Up')
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
     
        const password = form.password.value;
        const email = form.email.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);

            fetch('http://localhost:5000/jwt',{
                method:"POST",
                headers:{
                  'content-type' : 'application/json'
                },
                body:JSON.stringify({user:user.email})
              })
              .then(res=>res.json())
              .then(data=>{
                localStorage.setItem('momentJwt-token',data.token)
              })
              .catch(e=>console.error(e))  
            navigate(from, { replace: true });
            setError('');
            form.reset();
        })
        .catch(error => {

            console.error(error);
            setError(error.message)

        })
        

    }
    return (
        <div>
            <div className="hero w-full my-20">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-96 rounded-lg' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                        <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        {error}
                        <p className='text-center'>Already have an account? <Link className='text-purple-400  font-bold' to="/login">Login</Link> </p>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default SignUp;