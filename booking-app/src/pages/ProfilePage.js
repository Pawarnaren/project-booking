import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext.js'
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PlacesPage from './PlacesPage.js';
import AccountNav from '../AccountNav.js';

export default function AccountPage() {
  const [redirect, setRedirect] = useState(null);  
  const {ready, user, setUser} = useContext(UserContext);  
  let {subpage} = useParams();
  console.log(subpage);
  if(subpage === undefined){
    subpage = 'profile';
  }

  // function for logout functioning
  async function logout(){
    await axios.post('/logout')
    setRedirect('/')
    setUser(null);

  }

  if(!ready){
    return 'Loading....';
  }
  
  if(ready && !user && !redirect){
    return <Navigate to={'/login'} />
  }


  // function for redirect onclicking logout
  if(redirect){
    return <Navigate to={redirect} />
  }


  return (
    <div>

        <AccountNav/>
        {subpage === 'profile' && (
            <div className='max-w-lg mx-auto text-center'>
                Logged in as {user.name} ({user.email}) <br/>
                <button onClick={logout} className='max-w-sm mt-2 primary'>Logout</button>
            </div>
        )}

        {subpage === 'places' && (
          <PlacesPage/>
        )}


    </div>
  );
}


