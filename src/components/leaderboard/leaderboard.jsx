import React from "react"
import {useEffect,useState} from "react"
import {useParams,Redirect} from "react-router-dom"
import db from "../../firebase"
import Score from "./score"
function Leaderboard(){
    const {id} = useParams();
    const [quiz,setquiz] =useState([]);
    var users=[];
    useEffect(()=>{
        db.collection("quizzes").onSnapshot((snapshot)=>{
            setquiz(
                snapshot.docs.map((doc)=>
                ({
                    id:doc.id,
                    questions:doc.data().questions,
                    name:doc.data().name,
                    users:doc.data().users
                })
                )
            )
        })

        
    },[])

        if(quiz.length>0){
         var  thisQuid= quiz.filter(el=>el.id==id);
         
          var users= thisQuid[0].users;
          users.sort((a,b)=>b.score-a.score);
          if(users.length>0){
              return(
                  <div className="quizleaderboard">
                      {users.map((el,i)=><Score user={el.user} score={el.score} key={i} ind={i}/>)}
                  </div>
              )
          }else{
              return(
                  <h1>
                      No User Has taken This Quiz Yet
                  </h1>
              )
          }
        }else{
            return(
                <h1>
                    Loading...
                </h1>
            )
        }


    return(
        <div>
            hi
        </div>
    )
}

export default Leaderboard;