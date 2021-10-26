import React,{useEffect,useState} from "react"
import {useParams,Redirect} from "react-router-dom"
import db from "../../firebase"
import Option from "./options"
import Score from "./finalScore"


function Quiz(){
    //variables and const
    const [timeoutloaded,setTimeOutLoaded]=useState(false)
    const [quiz,setquiz]=useState([]);
    const {id} = useParams();
    let [qno,setqno] = useState(0);
    var thisQuiz=[]
    const [score,setScore] = useState(0);
    const [time,setTime]=useState(60);
    let [redirect,setRedirect] = useState(false);
    let wait=false;
    const [name,setName]=useState("")
    const [enter,setEnter] = useState(false)

    //useEffects
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
        return()=>{
            setRedirect(false);
            setquiz([])
        }
            

        
        
    },[])
  var times;
    useEffect(()=>{
        
     times=   setTimeout(()=>{
              if(!wait){
                if(time>0){
                    setTime(time-1)
                }
            }
              },1000)
                
        

    },[time])


    //on option click
    let smh=0;
    const check = (e) =>{
        let option = e.target.innerText;
        let correctOption = thisQuiz[0].questions[qno].correctAns;
        if(option===correctOption){
             smh = score+(Math.floor(time*16.66666));
            wait=true;
            clearTimeout(times)
            setTime(60);
            wait=false;
            setScore(smh); 
        }
        if(thisQuiz[0].questions.length-1<=qno){
            let usercol;
                usercol=thisQuiz[0].users;
            setTimeout(()=>{
                console.log(usercol);
                usercol.push({
                    user:name,
                    score:smh
                })
                db.collection("quizzes").doc(id).update({users:usercol});
                setRedirect(true);
            },1500)             

        }else{
            setqno(qno+1);
        }
    }
    const namechange = (e)=>{
        setName(e.target.value);
    }
    const clickbutton = ()=>{
        console.log(thisQuiz);
        if(thisQuiz[0].users.filter((el)=>el.user===name).length>0){
            alert("name taken already!");
            return;
        }else{
            setEnter(true)
        }
        
    }
    //rendering
    if(!enter){
        thisQuiz=quiz.filter((el)=>el.id==id);
        return(
            <div className="final-contain">
            <div className="finalScore">
                <h3>Enter Your Username</h3>
                <input type="text" placeholder="name" value={name} onChange={namechange}/>
                <button className="leader" onClick={clickbutton}>Done</button>
            </div>
            </div>
        )
    }else{
        if(quiz.length>0){
            clearTimeout(timeoutload);
            thisQuiz=quiz.filter((el)=>el.id==id);
            if(redirect){
               return(
                  <Score score={score} href={id}/>
               )
               
           }
           if(thisQuiz.length>0){
               return(
                   <div className="contain">
                       <div className="gameQuiz">
                           <div className="gameQuestion">
                           <h1>{thisQuiz[0].name}</h1>
                       <p id="time">{time}</p>
                           <p>{score}</p>
                           </div>
                           <p className="ques">{thisQuiz[0].questions[qno].question}</p>
                           <div className="parent-options">
                           {
                               thisQuiz[0].questions[qno].options.map((el,ind)=><Option key={ind} option={el} onclick={check}/>)
                           }
                           </div>
                       </div>
                   </div>
               )
           }  else{
   
               return(
                   <Redirect to="/"/>
               )
           }
   
   
           
       }else{
           
           var timeoutload = setTimeout(()=>{
                setTimeOutLoaded(true)
           },5000)
           if(timeoutloaded){
            return(
                <Redirect to="/"/>
            )
           }else{
            return (
                <h1>loading</h1>
            )
           }

       }
    }




}
export default Quiz