import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div>
            <div className='error-container text-center'>
            <h1 className='text-3xl font-bold'>404!</h1>
            <h1 className='text-3xl font-bold'>Sorry, we couldn't find this page</h1>
            <br />
            <br />
             <Link to='/'className="error">
            Back to homepage
          </Link>
        </div>
        </div>
    );
};

export default ErrorPage ;