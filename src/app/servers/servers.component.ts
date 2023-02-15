import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]', abbiamo selezionato per elemento, aggiungendo le quadre
  //selector: '.app-servers', abbiamo selezionato per classe
  selector: 'app-servers', //Da utilizzare praticamente sempre questa scrittura
  template: `
  <app-server></app-server>
  <app-server></app-server>`, //Con le backtick ( alt + 96) possiamo scrivere il codice su più linee
  //All'interno del componente è NECESSARIO avere un template (o un templateUrl se prendiamo il codice HTML da un file esterno)
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}