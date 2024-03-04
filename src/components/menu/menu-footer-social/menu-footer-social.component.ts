import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { remixYoutubeFill, remixFacebookFill, remixSpotifyLine, remixInstagramFill, remixTiktokFill, remixTwitterFill} from '@ng-icons/remixicon';

@Component({
  selector: 'menu-footer-social',
  templateUrl: './menu-footer-social.component.html',
  styleUrls: ['./menu-footer-social.component.scss'],
  viewProviders: [provideIcons({  remixYoutubeFill, remixFacebookFill, remixSpotifyLine, remixInstagramFill, remixTiktokFill, remixTwitterFill })]
})
export class MenuFooterSocial{
  title = 'prueba';
}
