
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
//     const [data,setData] = useState([])
//    useEffect(()=>{
//     fetch('https://api.github.com/users/yashsaxena8055')
//     .then(response => response.json())
//     .then(data =>{
       
//          console.log("GITHUB data : "+data);
//          setData(data);
//     })
//    },[]) 

const data = useLoaderData
  return (
    <>
     <div className="text-center m-4 bg-gray-600 text-white p-4 text3xl ">Github Followers:{data.followers} </div>
    <div >< img src={data.avatar_url} alt="git picture" /></div>

    </>
   
  )
}

export default Github

export const  githubInfoLoader = async ()=>{
   const response = await fetch('https://api.github.com/users/yashsaxena8055')
    return response.json();
}
