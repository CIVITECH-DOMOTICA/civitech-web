import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AcercaDeNosotrosComponent } from './acerca-de-nosotros/acerca-de-nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { DomoticaInformacionComponent } from './domotica-informacion/domotica-informacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { GraciasComponent } from './gracias/gracias.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';
import { UseCaseDetalleComponent } from './use-case-detalle/use-case-detalle.component';
import { PoliticaPrivacidadComponent } from './legal/politica-privacidad.component';
import { AvisoLegalComponent } from './legal/aviso-legal.component';
import { PoliticaCookiesComponent } from './legal/politica-cookies.component';
import { InstalladoresComponent } from './instaladores/instaladores.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresaDetalleComponent } from './empresa-detalle/empresa-detalle.component';



@NgModule({
  declarations: [
    AcercaDeNosotrosComponent,
    ContactanosComponent,
    DomoticaInformacionComponent,
    ProyectosComponent,
    GraciasComponent,
    ProyectoDetalleComponent,
    UseCaseDetalleComponent,
    PoliticaPrivacidadComponent,
    AvisoLegalComponent,
    PoliticaCookiesComponent,
    InstalladoresComponent,
    EmpresasComponent,
    EmpresaDetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class FeaturesModule { }
