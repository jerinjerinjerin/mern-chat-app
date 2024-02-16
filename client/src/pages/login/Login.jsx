import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
                      backdrop-filter backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full text-white input input-bordered h-10 bg-black"
            />
          </div>
          <div>
             <label className="label">
                <span className="text-base label-text text-white">Password</span>
             </label>
             <input
              type="password"
              placeholder="Enter Password"
              className="w-full text-white input input-bordered h-10 bg-black"
            />
          </div>
          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white">
            {"Don't"} have an account?
          </a>
          <div>
             <button className="btn btn-block btn-sm mt-2 bg-black text-white hover:bg-black">signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;





//starter code for this file
// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div
//           className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
//                         backdrop-filter backdrop-blur-lg bg-opacity-0"
//         >
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             Login
//             <span className="text-blue-500"> ChatApp</span>
//           </h1>
  
//           <form action="">
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text text-white">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter username"
//                 className="w-full text-white input input-bordered h-10 bg-black"
//               />
//             </div>
//             <div>
//                <label className="label">
//                   <span className="text-base label-text text-white">Password</span>
//                </label>
//                <input
//                 type="password"
//                 placeholder="Enter Password"
//                 className="w-full text-white input input-bordered h-10 bg-black"
//               />
//             </div>
//             <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white">
//               {"Don't"} have an account?
//             </a>
//             <div>
//                <button className="btn btn-block btn-sm mt-2 bg-black text-white hover:bg-black">signup</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default Login;