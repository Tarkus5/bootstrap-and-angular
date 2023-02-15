import { Component } from '@angular/core';
//Decorator = componente TS che consente di migliorare le classi o il codice
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }
}
