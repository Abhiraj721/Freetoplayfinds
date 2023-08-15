import React from 'react'
import "../App.css"
export default function Footer({search}) {
  return (
    <div className='footer'>
   { search=="" ?   <footer style={{color:"black"}} className='font-effect-emboss'>Made with 💚 By <a  href="https://abhirajbhosle.netlify.app/" style={{textDecoration:"none",color:"purple"}}>Abhiraj</a></footer> : ""}
    </div>
  )
}
