import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];


const Nav = () => {

           const [open,setOpen] = useState(false)
    
const links = navLinks.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between mx-10 mt-4'>
        <span className='flex gap-2 ' onClick={()=>setOpen(!open)}>
              { open ? <X className='md:hidden '></X> : <Menu className='md:hidden '></Menu>}
              <ul className={`md:hidden absolute z-[3000] duration-1000 ${open ? 'top-12' : '-top-40'} p-4 bg-green-300 hover:bg-blue-500 focus:bg-blue-500 shadow-lg transition-all hover:scale-110 focus:scale-110 text-black`}>
                {links}
              </ul>
               <h3>My Navbar</h3>
        </span>
            <ul className='md:flex  hidden'>
                {

                links
            }
            </ul>

            {/* <ul className='flex'>

                {

                  navLinks.map(route=><li className='mr-10'> <a href={route.path}>{route.name}</a></li>) 
                     
                }

            </ul> */}

           {/* <ul className='flex gap-10'>
                <li> <a href="/"></a>Home</li>
           <li> <a href="/about">About</a></li>
            <li> <a href="/blog"></a>Blog</li>

           </ul> */}
           <button>Sign In</button>
        </nav>
    );
};

export default Nav;