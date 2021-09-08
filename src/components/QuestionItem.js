import React, {useState, useEffect} from "react";

function QuestionItem({ question, removeQuestion, updateIndex }) {
  const { id, prompt, answers, correctIndex } = question;
  
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  
  function deleteQuestion() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method:'DELETE'
    })
    removeQuestion(id)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={e => updateIndex(id, e.target.value)}>{options}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
