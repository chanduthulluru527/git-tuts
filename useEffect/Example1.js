import React from 'react'
import {useState,useEffect} from 'react'
const URL="https://jsonplaceholder.typicode.com/users";

const Index = () => {
  const [usersData,setUsersData]= useState([]);
  const [loading,setloading]=useState(false);
  const [isError,setisError] =useState({status:false,msg:""});
  // fecthing users data--->
  const fecthUsersData=async (url)=>{
    setloading(true)
    setisError({status:false,msg:""})
    try{
    const response = await fetch(url).then(response => response.json());
    setUsersData(response);
     setloading(false);
    setisError({status:false,msg:""})
   
    }
    catch(error){
      setloading(false);
      setisError({status:true,msg:"Something loading please try later"})
      

    }

  }
  useEffect(()=>{
    fecthUsersData(URL)
  },[])

  if(loading){
    return <div>
      <h2>loading.....</h2>
    </div>
    
  }
    if(isError?.status){
       return <div>
        <h2 style={{color:'red'}}>{isError.msg}</h2>
      </div>
      

    }
  return (
    <div>
        <h1>hello world</h1>
        <ul>
          {
            usersData.map((eachObj)=>{
              const {id ,name,email}=eachObj;
              return <li key={id}>
                <div>{name}</div>
                <div>{email}</div>
              </li>
            })
          }
        </ul>
      
    </div>
  )
}

export default Index;
