import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const RegisterPage = () => {

  // Events for changing the states of the variables
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  // Function for submitting the users
  async function registerUser(ev){
    ev.preventDefault();
    try{
      await axios.post('/register', {
        name,
        email,
        password,   
      });
      alert('Registration completed now you can login!')
    }catch(e){
      alert('Registration failed pls try again later')
    }

  }
  
  return (
    <div className='flex items-center justify-around mt-4 grow'>
        <div className='mb-60'>
            <h1 className='mb-4 text-4xl text-center '>Register</h1>

            <form className='max-w-md mx-auto' onSubmit={registerUser} >
                <input type="text" placeholder='your name' 
                    value={name} onChange={ev => setName(ev.target.value)} />

                <input type="email" placeholder='your@email.com' 
                    value={email} onChange={ev => setEmail(ev.target.value)} />

                <input type="password" placeholder='password'
                 value={password} onChange={ev => setPassword(ev.target.value)} />

                <button className='primary'>Register</button>
                <div className='py-2 text-center text-gray-500'>
                    Already a member? &nbsp; 
                    <Link className='text-black underline' to={'/login'}>Login</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage
