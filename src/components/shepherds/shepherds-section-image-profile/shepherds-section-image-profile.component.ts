import { Component, Input } from '@angular/core';

@Component({
  selector: 'shepherds-section-image-profile',
  templateUrl: './shepherds-section-image-profile.component.html',
  styleUrls: ['./shepherds-section-image-profile.component.scss']
})
export class ShepherdsSectionImageProfile {
  @Input() img?: string;
}
