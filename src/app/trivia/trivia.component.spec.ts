import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TriviaComponent } from './trivia.component';
import { TriviaService } from '../services/trivia.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { TriviaQuestion } from '../models/trivia';

// Test using SpyObj + TestBed
describe('TriviaComponent', () => {
  let component: TriviaComponent;
  let fixture: ComponentFixture<TriviaComponent>;
  let mockTriviaService: jasmine.SpyObj<TriviaService>;

  beforeEach(() => {
    mockTriviaService = jasmine.createSpyObj(TriviaService, ['getCategories', 'getDifficulties','getQuestions']);
    mockTriviaService.getCategories.and.returnValue(of([]));
    mockTriviaService.getDifficulties.and.returnValue(of([]));
    
    TestBed.configureTestingModule({
      declarations: [TriviaComponent],
      providers: [ {provide: TriviaService, useValue: mockTriviaService}],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(TriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(mockTriviaService.getCategories).toHaveBeenCalled();
    expect(mockTriviaService.getDifficulties).toHaveBeenCalled();
    expect(mockTriviaService.getQuestions).not.toHaveBeenCalled();
  });

  it('getQuestions with empty response should not set questions', () => {
    mockTriviaService.getQuestions.and.returnValue(of({response_code: 1, results: []}));

    component.getQuestions();

    expect(mockTriviaService.getQuestions).toHaveBeenCalled();
    expect(component.questions.length).toBe(0);
  });

  it('getQuestions with valid response should not set questions', () => {
    const question: TriviaQuestion = {
        type: 'A',
        difficulty: 'B',
        category: 'C',
        question: 'D',
        correct_answer: 'E',
        incorrect_answers: [],
        random_order_answers: [],
        question_id: 'F',
        chosen_answer: 'G',
    };

    mockTriviaService.getQuestions.and.returnValue(of({response_code: 0, results: [question]}));

    component.getQuestions();

    expect(mockTriviaService.getQuestions).toHaveBeenCalled();
    expect(component.questions.length).toBe(1);
    expect(component.questions[0]).toBe(question);
  });
});
