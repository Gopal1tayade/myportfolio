import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'


const nav = () => {
  
  return (
    <nav>
      <a href="#" className='active'><AiOutlineHome /></a>  
      <a href="#about"><AiOutlineUser /></a>
      <a href="#exprience"><BiBook /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default nav
