import React from "react"

function Question(props){
    return(
        <div className="question">
      <span>
          {props.question}
      </span>
      <span>
          {props.correct}
      </span>
      <span>
          {props.options}
        </span> 
    </div>
    )
    
}

export default Question;