import React, { useState } from 'react'
import './App.css';

function App() {

 const [citys,setcitys]=useState(["city","setcity"])
 const handelchange=(e)=>{
   data.forEach((data)=>{
    if(data.id === e.target.value){
      setcitys(data.city)
    }
   })
}
const data=[
  {
    country:"india",
    id:"ind",
    city:['dehli','mumbai']
  },
  {
    country:"pakistan",
    id:"pak",
    city:['karachi','lohor']
  },
  {
    country:"nepal",
    id:"nep",
    city:['katmandu','gaay']
  }
]
  return (
  <>
    <div>
    <select onChange={handelchange}>
    {  data.map((val,index)=>{
      return <option value={val.id}>{val.country}</option>
      })}
    </select>
    <select>
      {
        citys.map((val,index)=>{
          return <option value={index}>{val}</option>
        })
      }
    </select>
    </div>
  </>
  )
}

export default App;
