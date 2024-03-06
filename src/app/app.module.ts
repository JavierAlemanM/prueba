import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIconComponent } from '@ng-icons/core';
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import {AccordionModule} from 'primeng/accordion'





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from 'src/components/menu/menu.component';
import { MenuItemCard } from 'src/components/menu/menu-item-card/menu-item-card.component';
import { MenuFooterForm } from 'src/components/menu/menu-footer-form/menu-footer-form.component';
import { MenuFooterDirectory } from 'src/components/menu/menu-footer-directory/menu-footer-directory.component';
import { MenuFooterSocial } from 'src/components/menu/menu-footer-social/menu-footer-social.component';
import { ProgressBar } from 'src/components/progress-bar/progress-bar.component';

import { ShepherdsBtnsDirection } from 'src/components/shepherds/shepherds-btns-direction/shepherds-btns-direction.component';
import { ShepherdsSectionImages } from 'src/components/shepherds/shepherds-section-images/shepherds-section-images.component';
import { ShepherdsSectionImageProfile } from 'src/components/shepherds/shepherds-section-image-profile/shepherds-section-image-profile.component';
import { ShepherdsSectionTitle } from 'src/components/shepherds/shepherds-section-title/shepherds-section-title.component';
import { ShepherdsSectionText } from 'src/components/shepherds/shepherds-section-text/shepherds-section-text.component';
import { ShepherdsSectionQuote } from 'src/components/shepherds/shepherds-section-quote/shepherds-section-quote.component';
import { Shepherds01 } from 'src/components/shepherds/shepherds-01/shepherds-01.component';
import { Shepherds02 } from 'src/components/shepherds/shepherds-02/shepherds-02.component';
import { Shepherds03 } from 'src/components/shepherds/shepherds-03/shepherds-03.component';
import { Shepherds04 } from 'src/components/shepherds/shepherds-04/shepherds-04.component';
import { ShepherdsFounder01 } from 'src/components/shepherds/shepherds-founder-01/shepherds-founder-01.component';
import { ShepherdsFounder02 } from 'src/components/shepherds/shepherds-founder-02/shepherds-founder-02.component';


import { EventComponent } from 'src/components/event/event.component';
import { EventCalendar } from 'src/components/event/event-calendar/event-calendar.component';

import { HelpComponent } from 'src/components/help/help.component';

@NgModule({
	declarations: [
		AppComponent,
		

		MenuComponent,
		MenuItemCard,
		MenuFooterForm,
		MenuFooterDirectory,
		MenuFooterSocial,
		ProgressBar,

		ShepherdsBtnsDirection,
		ShepherdsSectionImageProfile,
		ShepherdsSectionImages,
		ShepherdsSectionTitle,
		ShepherdsSectionText,
		ShepherdsSectionQuote,
		Shepherds01,
		Shepherds02,
		Shepherds03,
		Shepherds04,
		ShepherdsFounder01,
		ShepherdsFounder02,

		EventComponent,
		EventCalendar,

		HelpComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		NgIconComponent,
		ButtonModule,
		DialogModule,
		AccordionModule

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { 

}
