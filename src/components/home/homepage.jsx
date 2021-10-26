import React from "react"
import Navbar from "../navbar"
import db from "../../firebase"
import Intro from "./intro"
function Home(){
    return(
        <div>
            <Navbar />
            <Intro />
        </div>
        
    )
}

export default Home;