import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
      <Link to="dolls">Dolls</Link>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Menu