import React from 'react'

const Register = () => {
  return (
    <div className='Register-page'>
      <h1 className='Register-Heading  '>Register Here! </h1>
      <hr />

      <form  >
        <span className='division'>
          <input
            type="text"
            placeholder="First Name "
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            required
          />
        </span>

        <input
          type="number"

          placeholder="Mobile No."
          required
        />
        <input
          type="date"
          placeholder="Date Of Birth"
          required
        />

        <input
          type="email"
          placeholder="Enter Email Address "
          required
        />
        <input
          type="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          required
        />
        <button >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
