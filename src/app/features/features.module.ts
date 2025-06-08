import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AcercaDeNosotrosComponent } from './acerca-de-nosotros/acerca-de-nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { DomoticaInformacionComponent } from './domotica-informacion/domotica-informacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { GraciasComponent } from './gracias/gracias.component';
import { DetalleDomoticaComponent } from './detalle-domotica/detalle-domotica.component';
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';



@NgModule({
  declarations: [AcercaDeNosotrosComponent, ContactanosComponent, DomoticaInformacionComponent, ProyectosComponent, GraciasComponent, DetalleDomoticaComponent, DetalleProyectoComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeaturesModule { }
