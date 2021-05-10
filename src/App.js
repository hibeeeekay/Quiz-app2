import React, { useState } from 'react';


export default function App() {
	
	const questions = [
		{
			questionText: 'What is the capital of Lagos state?',
			answerOptions: [
				{ answerText: 'Uyo', isCorrect: false },
				{ answerText: 'Abeokuta', isCorrect: false },
				{ answerText: 'Ikeja', isCorrect: true },
				{ answerText: 'Jos', isCorrect: false },
			],
		},
		{
			questionText: 'In Nigeria, democracy day is now celebrated on?',
			answerOptions: [
				{ answerText: 'June 14', isCorrect: false },
				{ answerText: 'June 12', isCorrect: true },
				{ answerText: 'June 25', isCorrect: false },
				{ answerText: 'June 16', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'Which is the largest city in Nigeria?',
			answerOptions: [
				{ answerText: 'Abuja', isCorrect: false },
				{ answerText: 'Calabar', isCorrect: false },
				{ answerText: 'Ibadan', isCorrect: false },
				{ answerText: 'Lagos', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [clicked, setClicked] = useState(false);

	
	const handleAnswerButtonClick = (isCorrect) =>{
		
    if(isCorrect===true){
			setScore(score + 1);	
		};  
       
	   setClicked(true)

		
		if (currentQuestion < questions.length){
		  setCurrentQuestion(currentQuestion );
		}else{
            setShowScore(true);
		}
	}

  const handleNextQuestion = () =>{
    setClicked(false);
    if(currentQuestion < questions.length - 1 ){
      setCurrentQuestion(currentQuestion + 1)
    }else{
      setShowScore(true);
    }
  }
		
	return (
		  
			  <div className='app '>     
			{ showScore? (
				<div className='score-section'>
          <div className='completed'>Completed!</div>
          <div>You scored {score} out of {questions.length}</div>
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
						{questions[currentQuestion].answerOptions.map((answerOption)=> <button className={` answer-button ${ clicked && answerOption.isCorrect ? "correct" : " "}`} onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
					</div>
          <button className='next' onClick={handleNextQuestion} disabled={!clicked}>Next</button>    

				</>
		 		
			)}
		     
         
         </div>	
		      
	       	
        
	);
	 	
};

