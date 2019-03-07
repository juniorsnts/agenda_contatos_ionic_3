import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contatos = [];

  constructor(public navCtrl: NavController) {

  }

  adicionarContato = () => {
    this.navCtrl.push('AdicionarContatoPage').then(() => {
      this.navCtrl.getActive().onDidDismiss(data => {
        if (data) {
          this.contatos.push(data);
        }
      })
    })
  }
}
