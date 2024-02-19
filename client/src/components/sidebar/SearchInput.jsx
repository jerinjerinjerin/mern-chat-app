import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {IoSearchSharp} from 'react-icons/io5'
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations'

const SearchInput = () => {

  const [search, setSearch] = useState('');
  const {setSelectedConversation } = useConversation();
  const {conversations} = useGetConversations();


  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!search) return;

    
    if(search.length < 3){
      return toast.error('Search term must be at least 3 characters long')
    }

    const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLocaleLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    } else toast.error('No user Found')
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..." className='input input-bordered rounded-full bg-black text-white' />
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