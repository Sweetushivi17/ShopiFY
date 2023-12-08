import React from 'react'

const Login = () => {
  return (
    <div className='Login-page '>
       <h1 className=" Login-Heading">Login Here</h1>
       <hr />
      <form  >
        <input
          placeholder="Enter Your Email "
          required
        />
        <input
          type="password"
          placeholder="Password"
          required
        />
        <button >Log In</button>
      </form>
      
    </div>
    
  )
}

export default Login
