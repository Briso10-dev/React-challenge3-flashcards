import { useState } from "react";
import { questions } from "./App";

function FlashCards(){

    const [selectedId,setSelectedId] = useState(null);

    return(
        <div className="grid grid-cols-[1fr 1fr 1fr] gap-[2rem]">
            {questions.map((question)=> (
                <div key={question.id}
                    className="border-s-2 border-[#e7e7e7] bg-[#f7f7f7] rounded-2xl aspect-2/1 flex justify-center items-center text-center p-[2rem] cursor-pointer">
                    <p> { question.id === selectedId? question.answer :  question.question} </p>
                </div>
            ))}
        </div>

    )
}

export default FlashCards;