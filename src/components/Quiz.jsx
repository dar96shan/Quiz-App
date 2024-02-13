import { useState, useCallback } from "react";
import Questions from "../questions.js";
import Summary from "./Summary.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const endOfQuestions = activeQuestionIndex === Questions.length;

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevStateAnswer) => {
      return [...prevStateAnswer, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (endOfQuestions) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <>
      <div id="quiz">
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectedAnswer={handleSelectedAnswer}
          onSkipAnswer={handleSkipAnswer}
        />
      </div>
    </>
  );
}
