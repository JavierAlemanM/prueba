import { Component, Input } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroChevronRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'menu-item-card',
  templateUrl: './menu-item-card.component.html',
  styleUrls: ['./menu-item-card.component.scss'],
  viewProviders: [provideIcons({  heroChevronRight })]
})
export class MenuItemCard{
  @Input() dataComponent: any;
  
  ngOnInit(): void {
    
  } 
  
}

