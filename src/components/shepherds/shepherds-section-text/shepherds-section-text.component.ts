import { Component, Input } from '@angular/core';

@Component({
  selector: 'shepherds-section-text',
  templateUrl: './shepherds-section-text.component.html',
  styleUrls: ['./shepherds-section-text.component.scss']
})
export class ShepherdsSectionText {
  @Input() text?: string;
  
}
