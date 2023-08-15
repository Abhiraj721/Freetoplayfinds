import React from 'react'
import "../App.css"
export default function Navbar({search,Setsearch}) {
  return (
    <div className='nav'>
        <div>
      <p className='head'>FreeToPlayFinds</p>
      </div>
      <div className='searchsection'>
      <label htmlFor="searchinput">Search : </label>
      <input type="text" className='searchinput'    value={search}  onChange={(e)=>{
        Setsearch(e.target.value)
      }} />
      </div>
    </div>
  )
}
