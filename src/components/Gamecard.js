import React from 'react'
import "../App.css"
export default function Gamecard({data}) {
  return (
    <div className='gamecard' data-aos="fade-up">
     <img className='gameimg' src={data.thumbnail} alt="" />
     <div className='gameinfo'>
        <center>
     <p>{data.title}</p>
 <p>Publisher : {data.publisher}</p>
 <span><a className='btn' href={data.game_url}>PLAY</a></span>
 </center>
 </div>
    </div>
  )
}
