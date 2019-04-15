import { Greetings } from '@angular-business/models';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-business-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'warehouse';
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<Greetings>('/api/')
      .subscribe((data: Greetings) => (this.title += ' and ' + data.message));
  }
}
