import React from 'react'

const Register = () => {
  return (
    <div className='container p-5 text-center w-50'>
    <h1 className='display-5 p-3  '>Register Here! </h1>
    <hr />

    <form className="my-5" >
  <span className='d-flex'>
  <input
        type="text"
        className="form-control my-2 w-50"
        placeholder="First Name "
        required
      />
  <input
        type="text"
        className="form-control my-2 w-50"
        placeholder="Last Name"
        required
      />
  </span>

  <input
        type="number"
        className="form-control my-2 w-100"
        placeholder="Mobile No."
        required
      />
        <input
        type="date"
        className="form-control my-2 w-100"
        placeholder="Date Of Birth"
        required
      />
  
  <input
        type="email"
        className="form-control my-2 w-100"
        placeholder="Enter Email Address "
        required
      />
      <input
        type="password"
        className="form-control my-2 w-100"
        placeholder="Password"
        required
      />
      <input
        type="password"
        className="form-control my-2  w-100"
        placeholder="Confirm Password"
        required
      />
      <button className="btn btn-outline-info  my-2 w-25">
        Register
      </button>
    </form>
  </div>
  )
}

export default Register
