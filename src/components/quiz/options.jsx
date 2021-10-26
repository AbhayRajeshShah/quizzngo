import React from "react"

function Option(props){
    return(
        <button className="gameOption" onClick={props.onclick}>
            {props.option}
        </button>
    )
}
export default Option