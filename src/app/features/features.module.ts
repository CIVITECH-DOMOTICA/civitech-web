import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AcercaDeNosotrosComponent } from './acerca-de-nosotros/acerca-de-nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';



@NgModule({
  declarations: [AcercaDeNosotrosComponent, ContactanosComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeaturesModule { }
