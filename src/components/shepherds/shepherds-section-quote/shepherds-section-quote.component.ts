import { Component, Input } from '@angular/core';

@Component({
  selector: 'shepherds-section-quote',
  templateUrl: './shepherds-section-quote.component.html',
  styleUrls: ['./shepherds-section-quote.component.scss']
})
export class ShepherdsSectionQuote {
  @Input() text?: string;
}
