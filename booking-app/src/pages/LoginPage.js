import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);

  async function handleLoginSubmit(ev){
    ev.preventDefault();
    try{
      const {data} = await axios.post('/login', {email,password}, {withCredentials: true})
      setUser(data)
      alert('Login Successful')
      setRedirect(true);
    }catch(e){
      alert('Login failed')
    }
  }
  
  if(redirect){
    return <Navigate to={'/'} />
  }




  return (
    <div className='flex items-center justify-around mt-4 grow'>
        <div className='mb-60'>
            <h1 className='mb-4 text-4xl text-center '>Login</h1>

            <form className='max-w-md mx-auto ' onSubmit={handleLoginSubmit}>
                <input type="email" placeholder='your@email.com' 
                  value={email} onChange={ev => setEmail(ev.target.value)} />

                <input type="password" placeholder='password' 
                  value={password} onChange={ev => setPassword(ev.target.value)} />
                <button className='primary'>Login</button>
                <div className='py-2 text-center text-gray-500'>
                    Don't have an account yet?
                    <Link className='text-black underline' to={'/register'}>Register Now</Link>
                </div>
            </form>

        </div>
    </div>
  )
}

export default LoginPage
