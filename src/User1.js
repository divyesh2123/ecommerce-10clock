import React from 'react'
import { Outlet } from 'react-router-dom'

export default function User1() {
  return (
    <div>User1

        <div>Menu for the submenu same like w3 school sidem menu</div>

        <Outlet />
    </div>
  )
}
