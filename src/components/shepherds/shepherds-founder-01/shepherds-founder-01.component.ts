import { Component, Input } from '@angular/core';

@Component({
  selector: 'shepherds-founder-01',
  templateUrl: './shepherds-founder-01.component.html',
  styleUrls: ['./shepherds-founder-01.component.scss']
})
export class ShepherdsFounder01 {
  name: string = `Emma Claudia Castellanos`
  type: string = `PASTORA`
  img01: string = `/assets/images/shepherds/founder01_01.png`
  img02: string = `/assets/images/shepherds/founder01_02.png`
  img03: string = `/assets/images/shepherds/founder01_03.png`
  text01: string = `Ella es nuestra pastora Emma Claudia, una mujer sensible a la voz de Dios que ha sido un gran apoyo del pastor César Castellanos para llevar el evangelio de Jesucristo a cada persona, enfocándose en las mujeres. Es pionera en varios aspectos de Colombia, uno de ellos es el trabajo en la política y ha luchado incansablemente por la paz y la libertad de predicar el evangelio en nuestra nación.`
  quote01: string = `Es pionera en varios aspectos de Colombia, uno de ellos es el trabajo en la política.`
  quote02: string = `Es una influencia para todas las mujeres en el mundo y continúa esforzándose junto a su familia para engrandecer la obra de Dios.`
}
