import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='sticky top-0 w-full '>
      <ul className='flex uppercase font-medium h-full text-white bg-slate-900/50 backdrop-blur-sm w-full justify-center gap-8 py-4 scroll-smooth'>
        <Link href="#home">
        <li>
          <button>Home</button>
        </li>
        </Link>
        <Link href="#projects">
        <li>
        <button>Projects</button>
        </li>
        </Link>
        <li>
        <button>About Me</button>
        </li>
      </ul>
    </div>
  )
}


export default Navbar