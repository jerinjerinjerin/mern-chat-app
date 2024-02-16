import React from 'react'
import {IoSearchSharp} from 'react-icons/io5';

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder="Search..." className='input input-bordered rounded-full bg-black text-white' />
        <button type='submit' className='btn btn-circle bg-sky-500 hover:bg-sky-700 text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput





// const SearchInput = () => {
//     return (
//       <form className='flex items-center gap-2'>
//           <input type="text" placeholder="Search..." className='input input-bordered rounded-full bg-black text-white' />
//           <button type='submit' className='btn btn-circle bg-sky-500 hover:bg-sky-700 text-white'>
//               <IoSearchSharp className='w-6 h-6 outline-none'/>
//           </button>
//       </form>
//     )
//   }
  
//   export default SearchInput