
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser} =useAuthContext();

  const signup = async ({fullname,username,password, confirmPassword, gender}) =>{
    const success = handleInputErrors ({fullname, username, password, confirmPassword, gender})

    if (!success) return;
    setLoading(true);

    try {
        const res = await fetch('/api/auth/signup', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({fullname, username, password, confirmPassword, gender})
        });

        const data = await res.json();
           
        // Log the response body
        console.log('Response body:', data);
    if (data.error){
        throw new Error(data.error);
    }

    //localStorage 
    localStorage.setItem('chat-user', JSON.stringify(data));
    setAuthUser(data);
    toast.success('Registration successfuly')
        

    } catch (error) {
        toast.error(error.message);
        setLoading(false);
    } finally {
        setLoading(false);
    }
  }    

  return { signup, loading }
}

export default useSignup

function handleInputErrors ({fullname, username, password, confirmPassword,gender}) {
    if(!fullname || !username || !password || !confirmPassword || !gender ){
      toast.error('Please fill in all fields') 
      return false 
    }

    if(password !== confirmPassword){
        toast.error('paswword don,t match') 
        return false
    }

    if(password.length < 6){
        toast.error('password must be at least 6 characters') 
        return false
    }

    return true
}