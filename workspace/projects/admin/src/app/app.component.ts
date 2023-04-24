import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin';
  receivedData: any

  ngOnInit() {
    window.addEventListener('my-event', (event) => {
      this.receivedData = event;
    });
  }
}
