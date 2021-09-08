import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {

  function removeQuestion(id) {
    const newQuestions = questions.filter(question => question.id !== id)

    setQuestions(newQuestions)
  }

  function updateIndex(id, value) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: parseInt(value),
      }),
    });
  }

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(q => {
      setQuestions(q)
      console.log(q)
      console.log(questions)
    })
  }, [])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => <QuestionItem key={question.id} question={question} removeQuestion={removeQuestion} updateIndex={updateIndex}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
