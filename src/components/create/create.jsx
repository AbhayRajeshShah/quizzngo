import React from "react"
import db from "../../firebase"
import {useState} from "react"
import Question from "./question"
import {Redirect,Link} from "react-router-dom"
import Navbar from "../navbar"
function Form(){


const [question,setQuestion]=useState(
    []
);
const [options,setoptions] = useState([]);
// const [newquestion,setNewQuestion] = useState("");
// const [option,setoption]=useState("");
// const [correctOption,setCorrectOption]=useState("");
const [object,setobject]=useState({
    option:"",
    correctOption:"",
    newquestion:""
});
const [redirect,setredirect]=useState(false);
const [qname,setqname]=useState("");

const change=(evt)=>{
    let fname=evt.target.name;
    let value=evt.target.value;
    setobject({...object,[fname]:value});
};
const qnames=(evt)=>{
    setqname(evt.target.value)
}
const addQ=()=>{
if(  object.newquestion!=="" && options.length!==null && object.correctOption !==""){
    console.log(options);
    if(options.length<2){
        alert("Specify atlesat 2 options");
        return;
    }
    if(options.filter((el)=>object.correctOption===el).length!==0){
        
        setQuestion(quest=>[...quest,{question:object.newquestion,options:options,correctAns:object.correctOption}]);
    }else{
        alert("Correct option must be provided as an option as well");
        return;
    }

    
    
    console.log(options);
}
setobject({
    option:"",
    correctOption:"",
    newquestion:""
})
setoptions([]);
}
const addOption=()=>{
    if(options.length>3){
        alert("A max of 4 options can be added");
    }else{
        if(object.option!==""){
            setoptions(opt=>[...opt,object.option]);
        }else{
            alert(" fill in option before u can add em")
        }
    setobject({...object,option:""});
    }

}
const [quizid,setQuizid] = useState("");
const addQuiz=()=>{

    db.collection("quizzes").add({questions:question,name:qname,users:[]}).then((doc)=>setQuizid(doc.id));
setredirect(true);
}
if(redirect){
    return(
        <div className="final-contain">
        <div className="finalScore">
            <h3>Congrats!</h3>
            <p>{quizid}</p>
            <button className="leader"><Link to={`/quiz/${quizid}`}>Link To Quiz</Link></button>
        </div>
        </div>
    )
}else{
    return (
        <div>
            <Navbar />
            <div className="bg-overlay">
            <div className="question-dashboard bg-overlay">
            <Question question="Question" options="No Of Options" correct="Correct Option"></Question>
            {question.map((el,index)=> <Question question={el.question} options={el.options.length} correct={el.correctAns} key={index} />)}
            <button className="btn" onClick={addQuiz}>add Quiz</button>    
            </div>
            <div className="form">
            <div className="flex-vert">
                <input type="text" autoComplete={false} value={qname} onChange={qnames} name="" placeholder="Quiz Name"id=""/>
                </div>
                <div className="form-vert">
                <input type="text" autoComplete="false" autoSave = "false"name="newquestion" placeholder="Enter ur Question here" value={object.newquestion} onChange={change}/>
            <input type="text" autoComplete={false} name="option" placeholder="Add ur options here" value={object.option} id="option" onChange={change}/>
            <input type="text" autoComplete={false} name="correctOption" placeholder="Correct Ans here" value={object.correctOption} onChange={change}/>
                </div>
                <div className="form-vert">
                    {options.map((el,index)=><div className="option" key={index}>{el}</div>)}
    
                </div>
                <div className="form-vert">
                <button className="btn" onClick={addOption}>Add option</button>
            <button className="btn" onClick={addQ}>Add</button>
                </div> 
            </div>
            </div>

            
        </div>
    )
}

}

export default Form;