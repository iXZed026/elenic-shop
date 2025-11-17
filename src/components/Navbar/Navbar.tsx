import Container from '../Container/Container'
import NavLinks from './NavLinks/NavLinks'
import Link from 'next/link'

import { FaCartShopping } from "react-icons/fa6";


function Navbar() {
  return (
    <header className='bg-[#13141A] sticky top-0 '>
      <Container>
        <div className='between-screen py-4'>
          <div className="logo">
            <h1 className='text-2xl text-[var(--green-color)] font-semibold'>Elenic Shop</h1>
          </div>
          <NavLinks />
          <div className='center-screen gap-5'>
            <Link href={"/cart"}><FaCartShopping className='icon'/></Link>
            <button className='btn'>Sign Up</button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Navbar