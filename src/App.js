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
	{
	  questionText: <img src="../memes/baingan.jpg" />,
	  answerOptions: [
		  {answerText: "Ganit", isCorrect: false},
		  {answerText: "Bhugol", isCorrect: false},
		  {answerText: "Itihaas", isCorrect: false},
		  {answerText: "Baingan", isCorrect: true}
		]
	},
	{
	  questionText: <img src="../memes/baithne ka tadika.jpg" />,
	  answerOptions: [
			{answerText: "Baithne Ka Tarika", isCorrect: true},
			{answerText: "Chalne Ka Tarika", isCorrect: false},
			{answerText: "Uthne Ka Tarika", isCorrect: false},
			{answerText: "Aane Ka Tarika", isCorrect: false}
		  ]
	  },
	{
	  questionText: <img src="../memes/aaj mood nhi kar rha.jpg" />,
	  answerOptions: [
			  {answerText: "Kal mood karega", isCorrect: false},
			  {answerText: "Aaj mood kar rha hai", isCorrect: false},
			  {answerText: "Aaj mood nhi kar rha", isCorrect: true},
			  {answerText: "Abhi karte hai", isCorrect: false}
			]
	},
	{
	  questionText: <img src="../memes/dedso rupiya.jpg" />,
	  answerOptions: [
				{answerText: "Sau", isCorrect: false},
				{answerText: "Haazar", isCorrect: false},
				{answerText: "Pachas", isCorrect: false},
				{answerText: "Dedso", isCorrect: true}
			  ]
	},
	{
	  questionText: <img src="../memes/elvish bhai.jpg" />,
      answerOptions: [
				  {answerText: "Rocky Bhai", isCorrect: false},
				  {answerText: "Munna Bhaiya", isCorrect: false},
				  {answerText: "Elvish Bhaiii", isCorrect: true},
				  {answerText: "Guddu Bhaiya", isCorrect: false}
				]
	},
	{
	  questionText: <img src="../memes/paani.jpg" />,
	  answerOptions: [
					{answerText: "Protein Shake", isCorrect: false},
					{answerText: "Doodh", isCorrect: false},
					{answerText: "Khana", isCorrect: false},
					{answerText: "Paani Paani Paani", isCorrect: true}
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
