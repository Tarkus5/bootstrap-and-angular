import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]', abbiamo selezionato per elemento, aggiungendo le quadre
  //selector: '.app-servers', abbiamo selezionato per classe
  selector: 'app-servers', //Da utilizzare praticamente sempre questa scrittura
  //template: `
  //<app-server></app-server>
  //<app-server></app-server>`, //Con le backtick ( alt + 96) possiamo scrivere il codice su più linee
  //All'interno del componente è NECESSARIO avere un template (o un templateUrl se prendiamo il codice HTML da un file esterno)
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  allowNewServer = false;
  ServerCreationStatus = 'No server was created!'
  serverName = '';

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }


  ngOnInit(){

  }

onCreateServer() {
  this.ServerCreationStatus = 'Server was created!'
}

onUpdateServerName(event: any){
  this.serverName = (<HTMLInputElement>event.target).value;
}

}
