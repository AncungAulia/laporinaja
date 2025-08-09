import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='bg-slate-600 shadow-lg flex items-center justify-around py-3 px-32 fixed top-0 left-0 w-full'>
            <div className='flex items-center gap-5 text-black'>
                <Link
                    to={"/lapor"}
                    className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
                    Lapor
                </Link>
            </div>

            <div className='flex items-center gap-5 text-black'>
                <Link
                    to={"/upvote"}
                    className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
                    Upvote
                </Link>
            </div>

            <div className='flex items-center gap-5 text-black'>
                <Link
                    to={"/lacak"}
                    className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300">
                    Lacak
                </Link>
            </div>
        </nav>

    )
}

export default Navbar