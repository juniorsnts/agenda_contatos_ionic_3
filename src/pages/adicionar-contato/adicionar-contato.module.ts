import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarContatoPage } from './adicionar-contato';

@NgModule({
  declarations: [
    AdicionarContatoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarContatoPage),
  ],
})
export class AdicionarContatoPageModule {}
