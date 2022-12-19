import React, {  useState, useEffect } from 'react';
import axios from 'axios';


export default function UserList()  {
    const [user, setUser] = useState([]);
   const photo = user.avatar_url;

   useEffect(() => {
    axios.get('https://api.github.com/users/OlhaGr?client_id=a1a5a13b1e7446f4e730&client_secret=5b4cf0f151ef1ff324ea903ae0146d35d61e26d7&sort=created')
      .then((res) => { 
        setUser(res.data);
      })
      .catch ((err) =>
        console.log(err));
    }, []);

    return (
           <div id='user' key={user.id}>
              <div id='pic'><img src={photo} alt="avatar" /></div>
              <div id='userinfo'>
               <li>Full Name: {user.name}</li>
                <li>User Name: {user.login}</li>
                 <li>Email Address: {user.email}</li>
                 <li>Location: {user.location}</li>
              </div>
          </div>
      );
    }
     
    