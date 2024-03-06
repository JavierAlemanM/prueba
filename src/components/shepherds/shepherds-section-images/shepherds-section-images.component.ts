import { Component, Input } from '@angular/core';

@Component({
  selector: 'shepherds-section-images',
  templateUrl: './shepherds-section-images.component.html',
  styleUrls: ['./shepherds-section-images.component.scss']
})
export class ShepherdsSectionImages {
  @Input() img1?: string;
  @Input() img2?: string;
}
