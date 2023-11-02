import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { logout } from '../Redux/action'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const Signup = () => {
    const data=useSelector((state)=>state)
    const {username,firstName,lastName,role}=data;
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    const userLogout=()=>{
        dispatch(logout());
        Navigate("/")
      }
  return (
    <div className='signup'>
    <h1>User's Details</h1>
    <span><b>username:</b> {username}</span>
    <span><b>First Name:</b> {firstName}</span>
    <span><b>Last Name:</b> {lastName}</span>
    <span><b>Role:</b> {role}</span>   
    <button onClick={userLogout}>Log out</button>
    </div>
  )
}

export default Signup