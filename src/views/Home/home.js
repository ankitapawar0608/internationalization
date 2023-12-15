import React from 'react'
import "./home.css"

function home() {

  const users = 15;


  return (
    <div>
      <h1>Welcome to my website</h1>

      <p>
        I am Ankita Pawar
      </p>
      <h3>
        Have a great day!!!!
      </h3>

      <p>
        {users} users are learning react.
      </p>
    </div>
  )
}

export default home