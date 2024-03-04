import { Component, Input } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroXMark } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  viewProviders: [provideIcons({  heroXMark })]
})
export class MenuComponent {
	jsonPanel01: any = {
		img: "/assets/images/menu-item-01.png",
		title: "¿Quiénes somos?",
		options: ['El inicio','Propósito']
	};
	jsonPanel02: any = {
		img: "/assets/images/menu-item-02.png",
		title: "¿Por quién hacemos todo?",
		options: ['¿Jesús?']
	};
	jsonPanel03: any = {
		img: "/assets/images/menu-item-03.png",
		title: "Testimonios",
		options: ['Testimonios','Nuestros Fundadores']
	};
	jsonPanel04: any = {
		img: "/assets/images/menu-item-04.png",
		title: "Conectate",
		options: ['Unirme','Preguntas Frecuentes']
	};
}
