import React from 'react';
import './App.css';
import Home from "./Components/Home"
import StepTwo from './Components/StepTwo';
import ThirdStep  from './Components/Third';
import { nanoid } from 'nanoid'


function App() {
  const [errors,setErrors]=React.useState(null)
  const [Questions,SetQuestions]=React.useState([])
  const [fetchData, setFetchData] =React. useState(false);
  const [Types, setTypes] = React.useState({category: "",difficulty: ""});
  const SecondRef = React.useRef(null)
  const ThirdRef = React.useRef(null)
  const [scrolling , setScrolling]=React.useState({"first":false,"second":false})
  const [submit,Setsubmit]=React.useState(false)
  
  function handleType(event) {
    const { name, value } = event.target;
    setTypes(prevTypes => ({ ...prevTypes, [name]: value }));
  }


  function handleGanerate(){
    if(Types.category != "" && Types.difficulty !=""){
      setErrors(null)
      setScrolling(prev=>({...prev,"second":true})) 
      ThirdRef.current?.scrollIntoView({
          behavior:"smooth",
          block: "start"
        }
      )
      setFetchData(true);
    }else{
      setErrors("please choose Type and difficulty")
    } 
  }

  function handleAnswers(Qid, Aname) {
    SetQuestions(prevQuestions => 
      prevQuestions.map(question => {
        if (question.id === Qid) {
          return {
            ...question,
            answers: question.answers.map(answer => 
              answer.Name === Aname ? { ...answer, choose: !answer.choose } : answer
            )
          };
        }
        return question;
      })
    );
  }


  function handleStart(){
      setScrolling(prev=>({...prev,"first":true }))
      SecondRef.current?.scrollIntoView(
        {
          behavior:"smooth",
          block: "start"
        }
      )
  }
  
 React. useEffect(() => {
    if (fetchData) {
      fetch(`https://quizapi.io/api/v1/questions?apiKey=AZ7Xb8n2gHM6jL29Ipso1KlzzSqcPGo2UoP8YsUy&category=${Types.category}&difficulty=${Types.difficulty}&limit=20`)
        .then(response => {
          if (!response.ok) {
            return response.json().then(errorInfo => {
              throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(errorInfo)}`);
            });
          }
          return response.json();
        })
        .then(data => {
          data.forEach(d => {
            const question = {
              "id": nanoid(),
              "question": d.question,
              "isCorrect":false,
              "answers":[ 
                 {
                  "Name":"A",
                  "answer": d.answers.answer_a,
                  "isTrue": d.correct_answers.answer_a_correct,
                  "choose":false,
                },
                 {
                  "Name":"B",
                  "answer": d.answers.answer_b,
                  "isTrue": d.correct_answers.answer_b_correct,
                  "choose":false,
                },
                 {
                  "Name":"C",
                  "answer": d.answers.answer_c,
                  "isTrue": d.correct_answers.answer_c_correct,
                  "choose":false,
                },
                {
                  "Name":"D",
                  "answer": d.answers.answer_d,
                  "isTrue": d.correct_answers.answer_d_correct,
                  "choose":false,
                },
                 {
                  "Name":"E",
                  "answer": d.answers.answer_e,
                  "isTrue": d.correct_answers.answer_e_correct,
                  "choose":false,
                },
                {
                  "Name":"F",
                  "answer": d.answers.answer_f,
                  "isTrue": d.correct_answers.answer_f_correct,
                  "choose":false,
                }
              ]
            };
            SetQuestions(prev => [...prev, question]);
            setFetchData(false);
          });
        })
        .catch(error => {
          console.error('Error fetching questions:', error);
          setFetchData(false);
        });
    }
   
  }, [fetchData]);
  function handleSubmit(event) {
    event.preventDefault();
    SetQuestions(prevQuestions =>
      prevQuestions.map(question => {
        console.log
        let isCorrect = question.answers.some(a => a.choose && JSON.parse(a.isTrue))
        return {
          ...question,
          isCorrect:isCorrect,
        };
      })
    );
    Setsubmit(true)
  }
function handleRestart(){
  setScrolling(prev=>({"first":true , "second":false }))
      SecondRef.current?.scrollIntoView(
        {
          behavior:"smooth",
          block: "start"
        }
      )
  SetQuestions([])
  Setsubmit(false)
}

  return (
    <>
     <Home
     showStep={handleStart}
      />
      <StepTwo
      ref={SecondRef}
      errors={errors}
      Types={Types}
      handleType={handleType}
      handleGenerate={handleGanerate}
      /> 
      <ThirdStep 
        question={Questions}
        ref={ThirdRef}
        submit={submit}
        handleAnswer={handleAnswers}
        Scrolling={scrolling}
        FormSubmite={handleSubmit}
        handleRestart={handleRestart}
      />
    </>
  );
}

export default App;
