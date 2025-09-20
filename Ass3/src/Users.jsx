// New file: Users.jsx
import React from 'react';
import {useState,useEffect} from 'react'
export default function Users() {
  const [user,setUser]=useState(null)

  useEffect(()=>{
    fetchData();
  },[])

   const fetchData = async() =>{
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    setUser(json);
   }

   if(!user){
    return <h1>Loading......</h1>
   }

  return (
      user.map((user)=>{
           return( 
           <div key={user.id}>
                <li>{user.name}</li>
                <li>{user.email}</li>
            </div>)
        })
  );
}