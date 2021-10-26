import React from "react"

function Score(props){
    return (
        <div className="leaderboardScore">
            <span>{props.ind+1}</span>
            <span className="a">{props.user}</span>
            <span className="b">{props.score}</span>
        </div>
    )
}

export default Score;