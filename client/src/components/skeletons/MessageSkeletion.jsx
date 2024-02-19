import React from 'react'

const MessageSkeletion = () => {
  return (
    <>
     <div className="flex gap-3 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-1">
            <div className="skeletion h-4 w-40"></div>
            <div className="skeletion h-4 w-40"></div>
        </div>
     </div>
     <div className="flex gap-3 items-center justify-end">
        <div className="flex flex-col gap-1">
            <div className="skeleton"> </div>
        </div>
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
     </div>
    </>
  )
}

export default MessageSkeletion