import { Link } from 'react-router'

export default function Navbar () {
  return (
    <>
    <div className='flex w-screen items-center justify-between px-16 py-5 fixed z-50'>
        <div>
            <Link to="/" className='text-3xl'>Rentora</Link>
        </div>
        <div className='hidden md:flex gap-10 text-xs font-bold tracking-wider uppercase items-center justify-center'>
            <Link to="/booking">Book now</Link>
            <Link to="/apartment">Apartments</Link>
            <Link to="/events">Events</Link>
            <Link to="/login">Login</Link>
        </div>
        <div className='flex flex-col md:hidden gap-1 items-center justify-center cursor-pointer'>
            <div className='bg-black w-[30px] h-[2px]'></div>
            <div className='bg-black w-[30px] h-[2px]'></div>
        </div>
    </div>
    </>
  )
}
