import { Component, Input } from '@angular/core';

@Component({
  selector: 'shepherds-02',
  templateUrl: './shepherds-02.component.html',
  styleUrls: ['./shepherds-02.component.scss']
})
export class Shepherds02 {
  name: string = `Julian Flechas`
  type: string = `PASTOR`
  img01: string = `/assets/images/shepherds/profile02_01.png`
  img02: string = `/assets/images/shepherds/profile02_02.png`
  img03: string = `/assets/images/shepherds/profile02_03.png`
  img04: string = `/assets/images/shepherds/profile02_04.png`
  text01: string = `Cuando asistí a la iglesia por primera vez fui un poco obligado por un familiar, que después de tanto insistir accedí a ir pero con una actitud desafiante hacia Dios y hacia los cristianos. Estaba en una vida de rebeldía, alcoholismo, desenfreno, malas amistades que me llevaron a hacerme daño y hacerle daño a otras personas; Incluso quitarme la vida en 3 ocasiones por depresión y de situaciones familiares y sentimentales .`
  text02: string = `Al entrar a la iglesia ese día escuche una voz dentro de mi que me decía:`
  text03: string = `Quedé impactado porque no sabía lo que pasaba, en mis últimos días de estar en el mundo había aceptado ideas ateístas y contrarias a la verdad de Dios. En medio de la alabanza sentí un fuerte deseo de llorar, mi orgullo no me dejaba hacerlo, pero al ver la gente alrededor mío llorando sentí que estaba en confianza y empecé a llorar como nunca antes lo había hecho.`
  text04: string = `Ahí entendí que era Dios llamándome, que no le importaba mi condición sino que Él estaba golpeando la puerta de mi corazón para cumplir un propósito en Él.`
  text05: string = `Hicieron el llamado a las personas que iban por primera vez, corrí literalmente al altar llorando entregue mi corazón a Jesus, sentí que nací de nuevo, empecé en el liderazgo pocos meses después de restaurarme por completo, empecé a servir a Dios`

  quote01:  string = `“Julián Yo te amo”`
}
