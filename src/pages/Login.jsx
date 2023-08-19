import React from 'react'

const Login = () => {
  return (
    <div className='container p-5 text-center w-50'>
       <h1 className=" display-5 p-3">Login Here</h1>
       <hr />
      <form className="m-5" >
        <input
        
          className="form-control my-2  w-100"
          placeholder="Enter Your Email "
          required
        />
        <input
          type="password"
          className="form-control my-2 w-100"
          placeholder="Password "
          required
        />
        <button className="btn btn-outline-secondary w-100 my-2">Log In</button>
      </form>
      
    </div>
    
  )
}

export default Login
