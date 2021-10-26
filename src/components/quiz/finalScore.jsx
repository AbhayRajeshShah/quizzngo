import React from "react"
import {Link} from "react-router-dom"
function Score(props){

    return(
        <div className="final-contain">
        <div className="finalScore">
            <h3>Congrats!</h3>
            <p>{props.score}</p>
            <button className="leader"><Link to={`/leaderboard/${props.href}`}>Leaderboard</Link></button>
        </div>
        </div>
    )
}

export default Score