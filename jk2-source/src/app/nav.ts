import {Component} from '@angular/core';

@Component({
  selector: 'nav',
  template: require('./nav.html')
})
export class NavComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
