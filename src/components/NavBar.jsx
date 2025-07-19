import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className='flex justify-between px-9 items-center h-16 bg-slate-500 w-screen'>
            <div className="logo font-bold text-2xl">iTask</div>
            <ul className='flex gap-5'>
                <li className='list-style-none hover:text-slate-300 cursor-pointer hover:scale-120'>Home</li>
                <li className='list-style-none hover:text-slate-300 cursor-pointer hover:scale-120'>Your tasks</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
