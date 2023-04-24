import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private myData = 'Hello from App 1';

  sendData() {
    const event = new CustomEvent('my-event', { detail: this.myData });
    window.dispatchEvent(event);
  }
}
