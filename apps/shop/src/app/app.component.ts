import { Greetings } from '@angular-business/models';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'angular-business-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'shop';
  constructor(private httpClient: HttpClient) {
    //this.httpClient.get<any>('/api/').subscribe(data => (this.title += ' and ' + data.message));
    this.httpClient
      .get<Greetings>('http://localhost:3333/api/')
      .subscribe((data: Greetings) => (this.title += ' and ' + data.message));
  }
}
