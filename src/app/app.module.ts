import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconComponent} from '@ng-icons/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from 'src/components/menu/menu.component';
import { MenuItemCard } from 'src/components/menu/menu-item-card/menu-item-card.component';
import { MenuFooterForm } from 'src/components/menu/menu-footer-form/menu-footer-form.component';
import { MenuFooterDirectory } from 'src/components/menu/menu-footer-directory/menu-footer-directory.component';
import { MenuFooterSocial } from 'src/components/menu/menu-footer-social/menu-footer-social.component';
import { ProgressBar } from 'src/components/progress-bar/progress-bar.component';


@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		MenuItemCard,
		MenuFooterForm,
		MenuFooterDirectory,
		MenuFooterSocial,
		ProgressBar
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgIconComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { 

}
