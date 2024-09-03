import { Component } from '@angular/core';
import { FactsService } from '../../services/facts.service';


@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent {
  constructor(private factsService: FactsService) {}

  factText = '';
  lang = 'en';
  name = 'batatas';

  getRandomFact() {
    this.factsService.getFact(this.lang)
      .subscribe({
        next: (data) => {
          this.factText = data.text;
          this.name = data.id;
        }
      });
  }
}
