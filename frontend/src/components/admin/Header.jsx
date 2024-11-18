import React from 'react'
import { Menu, LogOut } from "lucide-react";
import { useDispatch } from 'react-redux';
import { logoutUser } from '@/store/authSlice';

function AdminHeader({setOpen}) {

  const dispatch = useDispatch() 

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-bottom">
      <button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <Menu />
        <span className="sr-only">Toggle Menu</span>
      </button>
      <div className="flex flex-1 justify-end">
        <button onClick={handleLogout} className='bg-black inline-flex text-white text-sm bold font-medium py-2 px-2 rounded-md items-center shadow'>
          <LogOut />
          Logout
        </button>
      </div>
    </header>
  );
}

export default AdminHeader