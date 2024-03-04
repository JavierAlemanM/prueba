import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroChevronRight } from '@ng-icons/heroicons/outline';
@Component({
  selector: 'menu-footer-form',
  templateUrl: './menu-footer-form.component.html',
  styleUrls: ['./menu-footer-form.component.scss'],
  viewProviders: [provideIcons({  heroChevronRight })]
})
export class MenuFooterForm {
  title = 'prueba';
}
