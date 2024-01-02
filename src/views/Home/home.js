import React from 'react';
import "./home.css";
import  I18n from "./../../Utility/I18n"

function Home() {

 const users = 15;

  return (
    <div>
       
       <h1>{I18n({lang : "en" , keyword : "welcomemsg"})}</h1>

      <p>
        I am Ankita Pawar
      </p>

      <h3>
        Have a great day!
      </h3>

      <p>
        {users} users are learning react.
      </p> 
    </div>
  )
}

export default Home