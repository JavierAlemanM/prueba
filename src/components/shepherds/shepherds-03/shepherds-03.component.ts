import { Component, Input } from '@angular/core';

@Component({
  selector: 'shepherds-03',
  templateUrl: './shepherds-03.component.html',
  styleUrls: ['./shepherds-03.component.scss']
})
export class Shepherds03 {
  name: string = `Angela Sanchez`
  type: string = `PASTORA`
  img01: string = `/assets/images/shepherds/profile03_01.png`
  img02: string = `/assets/images/shepherds/profile03_02.png`
  text01: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  text02: string = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`
  quote01: string = `It has survived not only five centuries, but also the leap into electronic typesetting`
}
