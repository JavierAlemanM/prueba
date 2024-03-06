import { Component, Input } from '@angular/core';

@Component({
  selector: 'shepherds-01',
  templateUrl: './shepherds-01.component.html',
  styleUrls: ['./shepherds-01.component.scss']
})
export class Shepherds01 {
  name: string = `Fernando Ramos`
  type: string = `PASTOR`
  img01: string = `/assets/images/shepherds/profile01_01.png`
  img02: string = `/assets/images/shepherds/profile01_02.png`
  img03: string = `/assets/images/shepherds/profile01_03.png`
  img04: string = `/assets/images/shepherds/profile01_04.png`
  text01: string = `Cuando conocí a Jesús, mi vida cambió completamente. 
  Yo tenía un plan para mi vida, yo iba en una dirección, yo tenía unos sueños, 
  unos objetivos, pero el Señor entró en mi vida y me desarmó mis planes, 
  pero organizó sus planes, y como dice Isaías 55:`
  text02: string = `Y yo entendí que los planes de Dios eran mejores. 
  Entonces solté todo.`
  text03: string = `Yo quería cantar, quería tocar y tener mi grupo, quería actuar en televisión, y renuncié a todo eso y le dije,`
  text04: string = `Y cuando lo conocí, me enamoré de Él y comencé a servirle en la iglesia como líder de célula, en la música, en la alabanza y comencé a caminar con el Señor y a crecer, y luego el Señor en su tiempo (los deseos que yo tenía en mi corazón , los hizo realidad pero más altos) que mis pensamientos a nivel de la música, de la la actuación, me permitió hacer dos películas, dirigir, hacer libretos, mucho más de lo que yo pensé.`
  text05: string = `Así que siempre Dios nos sorprende con lo que Él tiene para nosotros, porque cuando nosotros le entregamos nuestro corazón, le entregamos nuestra vida,  Él toma control, y es el Señor el que puede hacer algo grande con nuestras vidas, no nosotros, por nosotros mismos. Le pertenecemos, y si le consagramos nuestra vida a Él, Dios nos va a llevar a niveles que nunca imaginamos.`


  quote01: string = `“Más altos son los pensamientos de Dios que los nuestros, así como el cielo es más alto que la tierra”`
  quote02: string = `"Señor, ahora te quiero solamente conocer, quiero entender lo que hiciste por mí en la cruz”`
}
