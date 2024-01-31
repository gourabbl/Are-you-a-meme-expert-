import React , {useState} from "react";

function App() {

  const questions = [
    {
      questionText: <img src="../memes/bhopendra jogi.jpg" />,
      answerOptions: [
        {answerText: "Kalia", isCorrect: false},
        {answerText: "Guddu Bhaiya", isCorrect: false},
        {answerText: "Bhupendra Jogi", isCorrect: true},
        {answerText: "Deepak Kalal", isCorrect: false}
      ]
    },
    {
      questionText: <img src="../memes/phir hera pheri.jpg" />,
      answerOptions: [
        {answerText: "Bohot Maza", isCorrect: false},
        {answerText: "Maza", isCorrect: true},
        {answerText: "Fategi", isCorrect: false},
        {answerText: "Saza", isCorrect: false}
      ]
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
export default App;
