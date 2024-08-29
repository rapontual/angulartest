import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../services/trivia.service';
import { SelectOption } from '../models/selectOption';
import { TriviaQuestion } from '../models/trivia';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {
  constructor(private triviaService: TriviaService) {}
  
  ngOnInit(): void {
    this.triviaService.getCategories()
      .subscribe({
        next: (data) => {
          this.categories = data; 
        }
      });

      this.triviaService.getDifficulties()
      .subscribe({
        next: (data) => {
          this.difficulties = data; 
        }
      });
  }

  category: string = "any";
  difficulty: string = "any";
  categories: SelectOption[] = [];
  difficulties: SelectOption[] = [];
  questions: TriviaQuestion[] = [];

  getQuestions() {
    this.triviaService.getQuestions(this.category, this.difficulty)
      .subscribe({
        next: (data) => {
          if (data.response_code != 0) {
            this.questions = [];
            return;
          }

          this.questions = data.results;
          this.questions.forEach( (question, idx) => {
            const allAnswers = question.incorrect_answers.concat(question.correct_answer);

            // shuffle answers
            question.random_order_answers = allAnswers
              .map(value => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ value }) => value);
            question.question_id = idx.toString();
          });
        }
      });
  }

  validateAnswers() {
    let score = 0;
    this.questions.forEach( (question, idx) => {
      
      const qId = `q${question.question_id}`;
      const element = document.getElementById(qId);
      let className = '';

      if (question.chosen_answer == question.correct_answer) {
        score++;
        className = "right"
      } else {
        className = "wrong"
      }

      element?.classList.add(className);
      });

      alert("Score: " + score + "/10");
  }
}
