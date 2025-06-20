import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AcercaDeNosotrosComponent } from './acerca-de-nosotros/acerca-de-nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { DomoticaInformacionComponent } from './domotica-informacion/domotica-informacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { GraciasComponent } from './gracias/gracias.component';



@NgModule({
  declarations: [AcercaDeNosotrosComponent, ContactanosComponent, DomoticaInformacionComponent, ProyectosComponent, GraciasComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeaturesModule { }
