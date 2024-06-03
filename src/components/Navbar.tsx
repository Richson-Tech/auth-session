import Link from 'next/link'
import React from 'react'
import LogoutForm from './LogoutForm'

const Navbar = async () => {
    const session = await getSession() 
  return (
      <nav>
        <Link href="/">HomePage</Link>
        <Link href="/premium">Premium</Link>
        <Link href="/profile">Profile</Link>
          <Link href="/login">Login</Link>
          <LogoutForm/>
    </nav>
  )
}

export default Navbar