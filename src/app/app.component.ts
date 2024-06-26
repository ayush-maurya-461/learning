import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shibangi-chutiya';
  isDisabled = false;
  num = 0

  text = 'Ayush'

  clicked(){
    this.isDisabled = true;
    console.log("clicked")
  }

  increment(){
    this.num++
  }
}
