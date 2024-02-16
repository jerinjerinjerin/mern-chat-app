import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding
             backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign up
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form action="">
                    <div>
                        <label className='label p-2'>
                            <span className="text-base label-text text-white">Full Name</span>
                        </label>
                        <input type="text" placeholder='John Doe' className='w-full text-white input input-bordered h-10 bg-black'/>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className="text-base label-text text-white">Username</span>
                        </label>
                        <input type="text" placeholder='JohnDoe' className='w-full text-white input input-bordered h-10 bg-black'/>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full text-white input input-bordered h-10 bg-black'/>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className="text-base label-text text-white">Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Enter Confirm Password' className='w-full text-white input input-bordered h-10 bg-black'/>
                    </div>
                    {/* Gender Checkbox */}
                    <GenderCheckbox/>
                    <a href="#" className="text-sm hover:underline hover:text-blue-600 text-white mt-2 inline-block">
                        Already have an account?
                    </a>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border hover:border-slate-700 border-slate-700 bg-black hover:bg-black text-white'>Sign Up</button>
                    </div>
                </form>
        </div>

    </div>
  )
}

export default SignUp







//starter code for this file
// const SignUp = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
  
//           <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding
//                backdrop-filter backdrop-blur-lg bg-opacity-0">
//                   <h1 className="text-3xl font-semibold text-center text-gray-300">
//                       Sign up
//                       <span className="text-blue-500"> ChatApp</span>
//                   </h1>
//                   <form action="">
//                       <div>
//                           <label className='label p-2'>
//                               <span className="text-base label-text text-white">Full Name</span>
//                           </label>
//                           <input type="text" placeholder='John Doe' className='w-full text-white input input-bordered h-10 bg-black'/>
//                       </div>
//                       <div>
//                           <label className='label p-2'>
//                               <span className="text-base label-text text-white">Username</span>
//                           </label>
//                           <input type="text" placeholder='JohnDoe' className='w-full text-white input input-bordered h-10 bg-black'/>
//                       </div>
//                       <div>
//                           <label className='label p-2'>
//                               <span className="text-base label-text text-white">Password</span>
//                           </label>
//                           <input type="password" placeholder='Enter Password' className='w-full text-white input input-bordered h-10 bg-black'/>
//                       </div>
//                       <div>
//                           <label className='label p-2'>
//                               <span className="text-base label-text text-white">Confirm Password</span>
//                           </label>
//                           <input type="password" placeholder='Enter Confirm Password' className='w-full text-white input input-bordered h-10 bg-black'/>
//                       </div>
//                       {/* Gender Checkbox */}
//                       <GenderCheckbox/>
//                       <a href="#" className="text-sm hover:underline hover:text-blue-600 text-white mt-2 inline-block">
//                           Already have an account?
//                       </a>
//                       <div>
//                           <button className='btn btn-block btn-sm mt-2 border hover:border-slate-700 border-slate-700 bg-black hover:bg-black text-white'>Sign Up</button>
//                       </div>
//                   </form>
//           </div>
  
//       </div>
//     )
//   }
  
//   export default SignUp