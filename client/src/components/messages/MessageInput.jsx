import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Check if message is empty or contains only whitespace
    await sendMessage(message);
    setMessage(''); // Clear input after sending the message
  };

  return (
    <form className='px-4 py-3' onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className='border block text-sm rounded w-full p-2.5 bg-gray-700 border-gray-600 text-white'
          placeholder='Send a Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' className="absolute inset-y-0 end-0 flex items-center pe-3">
          {loading ? <div className='loading loading-spinner'></div> : <BsSend className='text-white' />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;



// const MessageInput = () => {
//   return (
//     <form className='px-4 py-3'>
//         <div className="w-full">
//           <input type="text"
//           className='border block text-sm rounded w-full p-2.5 bg-gray-700 border-gray-600 text-white'
//           placeholder='Send a Message'
//           />
//           <button className="absolute inset-y-0 end-0 flex items-center pe-3">
//             <BsSend className=''/>
//           </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput