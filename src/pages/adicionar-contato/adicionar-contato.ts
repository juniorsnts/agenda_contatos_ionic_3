import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-adicionar-contato',
  templateUrl: 'adicionar-contato.html',
})
export class AdicionarContatoPage {

  contato_form: FormGroup;

  foto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCkEpnb8YXDMAl-lM-3uFgHOTSkecdOU21au9YRysO-4tp5Ul';

  constructor(private formBuilder: FormBuilder, private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.contato_form = this.formBuilder.group({
      nome: [null, Validators.required],
      numero: [null, Validators.required],
      email: [null]
    })
  }

  concluir = () => {
    this.contato_form.value.foto = this.foto;
    this.viewCtrl.dismiss(this.contato_form.value);
  }
}
