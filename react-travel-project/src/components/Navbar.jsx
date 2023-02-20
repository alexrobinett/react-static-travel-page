import React from "react";
import globe from "../assets/globe.png"

export default function Navbar(){
   return (

        <header className="header">
            <img className="logo" src={globe}></img>
            <h1>my travel journal.</h1>
        </header>
   )
}