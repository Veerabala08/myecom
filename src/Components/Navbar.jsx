import {} from 'react-icons'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = ()=>{
 
    const [nav, Setnav] = useState(true) 

    const handleNav =()=>{
        Setnav(!nav)
    }

    return(
        <>
        <div className=" flex justify-between items-center h-20 px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[orange] ">Ecom.</h1>
        <ul className="hidden uppercase md:flex">
            <li className="p-4">Home</li>
            <li className="p-4">Category</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={30} /> :  <AiOutlineMenu size={30} />}
           
        </div>
        <div className={!nav ? 'fixed left-0 top-1 w-[60%] border-r bg-black border-r-gray-100 h-full': 'hidden'}>
        <h1 className="text-3xl font-bold m-6 text-[#ff2c2c] ">Ecom</h1>
        <ul className='m-6 uppercase'>
            <li className="p-4 border-b border-gray-700">Home</li>
            <li className="p-4 border-b border-gray-700">Category</li>
            <li className="p-4 border-b border-gray-700">About</li>
            <li className="p-4 ">Contact</li>
        </ul>
        </div>
        </div>
        </>
    )
}  

export default Navbar