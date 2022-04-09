import React from 'react'

const Login = () => {
  return (
    <div className='container mt-5'>
        <div className='row justify-content-center'>
            <div className='col-12 col-md-3'>
            <form>
                <div class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control" />
                <label class="form-label" for="form2Example1">Email address</label>
                </div>
            
                <div class="form-outline mb-4">
                <input type="password" id="form2Example2" class="form-control" />
                <label class="form-label" for="form2Example2">Password</label>
                </div>
            
                
                <div className='text-center'>


                <button type="button" class="btn btn-primary btn-block mb-4 px-4">Sign in</button>
                </div>
            
                <div class="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
                
                </div>
            </form>
            </div>
        </div>
    
  </div>
  )
}

export default Login