import React from 'react'
import { Link } from 'react-router-dom';
import "./messagePage.css";

export const MessagePage = () => {
  return (
    <div>
        <h1>Theres no messages for you today =)!</h1>
        <Link to="/messages">About Page</Link>
    </div>
  )
}