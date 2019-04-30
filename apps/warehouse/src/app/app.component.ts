import { Greetings } from '@angular-business/models';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';

@Component({
  selector: 'angular-business-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  public title = 'warehouse';
  public appData: any | { version: string; changelog: string } = {
    version: '0.0.1',
    changelog: 'Better Updating Mode'
  };
  constructor(
    private httpClient: HttpClient,
    private swUpdate: SwUpdate,
    private swPush: SwPush
  ) {
    this.httpClient
      .get<Greetings>(environment.apiUrl + '/api')
      .subscribe((data: Greetings) => (this.title += ' and ' + data.message));
    this.checkforUpdates();
    this.subscribeToNotifications();
  }

  private checkforUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        if (event.current.appData) {
          this.appData = event.current.appData;
        }
        let msg = `New version ${this.appData.version} available. ${this.appData.changelog}.`;
        msg += 'Load New Version?';
        if (confirm(msg)) {
          window.location.reload();
        }
      });
    }
  }

  private subscribeToNotifications() {
    if (this.swPush.isEnabled) {
      this.swPush
        .requestSubscription({
          serverPublicKey: 'VAPID_PUBLIC_KEY'
        })
        .then(sub => console.log('send subscription to the server', sub.toJSON()))
        .catch(err => console.error('Could not subscribe to notifications', err));
      this.swPush.messages.subscribe(msg => console.log('Received message', msg));
    }
  }
}
