import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <nav>
        <Link href="/">HomePage</Link>
        <Link href="/premium">Premium</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/login">Login</Link>
    </nav>
  )
}

export default Navbar