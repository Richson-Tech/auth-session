import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <nav>
        <Link href="/">HomePage</Link>
        <Link href="/Premium">Premium</Link>
        <Link href="/Profile">Profile</Link>
        <Link href="/Login">Login</Link>
    </nav>
  )
}

export default Navbar