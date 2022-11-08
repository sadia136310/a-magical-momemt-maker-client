import React from 'react';

const Blog = () => {
    return (
        <div className='my-20'>
            
            <div className='bg-purple-200 mx-16 py-5 my-3 rounded-md'>
                <h1 className='text-xl font-bold text-center'>Difference between SQL and NoSQL</h1>
                <p className='px-4'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them).Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc	 NoSQL is a class of DBMs that are non-relational and generally do not use SQL.Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc

                </p>
            </div>

            <div className='bg-purple-200 mx-16 py-5 my-3 rounded-md'>
                <h1 className='text-xl font-bold text-center'>What is JWT, and how does it work?</h1>
                <p className='px-4'>
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.
                </p>
            </div>
            <div className='bg-purple-200 mx-16 py-5 my-3 rounded-md'>
                <h1 className='text-xl font-bold text-center'>What is the difference between javascript and NodeJS?</h1>
                <p className='px-4'> NodeJS :
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                    <br />
                    JavaScript :
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                </p>
            </div>
            <div className='bg-purple-200 mx-16 py-5 my-3 rounded-md'>
                <h1 className='text-xl font-bold text-center'>How does NodeJS handle multiple requests at the same time?</h1>
                <p className='px-4'>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
                </p>
            </div>
        </div>
    );
};

export default Blog;