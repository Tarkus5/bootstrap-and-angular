import { Component } from '@angular/core';
//Decorator = componente TS che consente di migliorare le classi o il codice
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
    color: white;
  }
  `]
})
export class ServerComponent{
  serverId = 10;
  serverStatus = 'offline';

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
