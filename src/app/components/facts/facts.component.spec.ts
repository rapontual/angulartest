import { FactsComponent } from './facts.component';
import { FactsService } from '../../services/facts.service';
import { of } from 'rxjs';

// Test using SpyObj without TestBed, instantiating the component directly 
describe('FactsComponent', () => {
  let component: FactsComponent;
  let factsService: jasmine.SpyObj<FactsService>;

  beforeEach(() => {
    factsService = jasmine.createSpyObj(FactsService, ['getFact']);
    component = new FactsComponent(factsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getRandomFact set facts', () => {
    const response = {
      id: '25',
      text: 'vingt cinq'
    };

    factsService.getFact.and.returnValue(of(response));
    component.lang = 'FR';

    component.getRandomFact();

    expect(factsService.getFact).toHaveBeenCalledWith(component.lang)
    expect(component.factText).toBe(response.text);
    expect(component.name).toBe(response.id);
  });
});
