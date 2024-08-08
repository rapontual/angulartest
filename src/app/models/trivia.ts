interface TriviaQuestion {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    random_order_answers: string[];
    question_id: string;
    chosen_answer: string;
}

interface TriviaResponse {
    response_code: number;
    results: TriviaQuestion[];
}

export {
    TriviaResponse,
    TriviaQuestion
}