import React from 'react'

const LoginForm = () => {
  return (
      <form>
          <input type="text" name='username' required placeholder='username'/>
          <input type="password" name='password' required placeholder='password'/>
    </form>
  )
}

export default LoginForm