import { Component, Input } from '@angular/core';

@Component({
  selector: 'shepherds-section-title',
  templateUrl: './shepherds-section-title.component.html',
  styleUrls: ['./shepherds-section-title.component.scss']
})
export class ShepherdsSectionTitle {
  @Input() type?: string;
  @Input() name?: string;
}
