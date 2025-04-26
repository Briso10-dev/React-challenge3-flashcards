import { useState } from "react";

const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript"
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components"
    },
    {
      id: 8832,
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX"
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props"
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook"
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element"
    }
  ];

function FlashCards(){
    const [selectedId, setSelectedId] = useState(null);

    function handleCLick(id){
        setSelectedId(id !== selectedId ? id : null);
    }

    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10rem] p-8 max-w-4/5 mx-auto h-[80vh]">
                {questions.map((question) => (
                    <div 
                        key={question.id}
                        onClick={() => handleCLick(question.id)}
                        className={`
                            relative h-[26rem] rounded-xl shadow-lg cursor-pointer
                            transform transition-all duration-300 hover:scale-105
                            ${question.id === selectedId ? 'bg-[#e03131]' : 'bg-white'}
                            flex items-center justify-center p-8
                            border-4 ${question.id === selectedId ? 'border-[#e03131]' : 'border-gray-200'}
                            w-full
                        `}
                    >
                        <p className={`
                            text-center text-3xl font-medium
                            ${question.id === selectedId ? 'text-white' : 'text-gray-800'}
                        `}>
                            {question.id === selectedId ? question.answer : question.question}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FlashCards;