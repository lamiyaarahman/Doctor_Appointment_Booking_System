import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import user from "../assets/user.jpg"
import dropdown_icon from "../assets/dropdown_icon.svg"
import menu_icon from "../assets/menu_icon.svg"
import cross_icon from "../assets/cross_icon.png"
import { NavLink, useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300 md:mx-10'>
      <img onClick={()=>navigate('/')} className='w-28 cursor-pointer ml-16 mr-1'  src={logo} alt=""/>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      
      </ul>
      <div className='flex items-center gap-4'>
        {
          token ? 
            <div className='flex items-center cursor-pointer group relative mr-28'>
            <img className='w-9 mr-1' src={user} alt=""/>
            <img className='w-2.5' src={dropdown_icon} alt=""/>
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-3 p-4'>
                <p onClick={()=>navigate('/my-profile')} className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={()=>navigate('/my-appointments')} className='cursor-pointer hover:text-black'>My Appointments</p>
                <p onClick={()=>setToken(false)} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>
          : <button onClick={()=>navigate('/login')} className='bg-primary text-white font-medium px-8 py-3 rounded-full font-light hidden md:block mr-16'>Create Account</button>
        }
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden mr-4' src={menu_icon} alt=""/>

        {/* --------Mobile Menu---------- */}
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-3 py-6'>
            <img className='w-36' src={logo} alt="" />
            <img className='w-9' onClick={()=>setShowMenu(false)} src={cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-3 mt-5 px-5 text-lg font-medium'>
              <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
              <NavLink  onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
              <NavLink  onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
              <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar