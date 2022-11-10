import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import img from '../../images/login.jpg'


const Login = () => {

    const { signIn, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target
        const password = form.password.value;
        const email = form.email.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;


                fetch('http://localhost:5000/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ user: user.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('momentJwt-token', data.token)
                    })
                    .catch(e => console.error(e))
                navigate(from, { replace: true });
                setError('');
                form.reset();

            })
            .catch(error => {

                console.error(error);
                setError(error.message)

            })



    }

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero w-full my-20">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">

                        <img className="rounded-lg w-96" src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                        <h1 className="text-5xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
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

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                            </div>
                            {error}
                        </form>
                        <p className='text-center'>New to Moment Maker?<Link className='text-purple-400 font-bold' to='/signup'>Sign Up</Link> </p>


                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning mx-20 mt-4">Login With Google</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;