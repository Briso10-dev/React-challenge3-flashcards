import { questions } from "./App";

function FlashCards(){
    return(
        <div>
            {questions.map((question)=> (
                <div>
                    <p> {question.question} </p>
                </div>
            ))}
        </div>

    )
}

export default FlashCards;