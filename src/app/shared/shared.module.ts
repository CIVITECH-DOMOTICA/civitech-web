import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { MensajeDomoticaComponent } from './components/mensaje-domotica/mensaje-domotica.component';
import { SeparadorComponent } from './components/separador/separador.component';
import { CarrouselOpinionesComponent } from './components/carrousel-opiniones/carrousel-opiniones.component';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomoticaComponent } from './components/domotica/domotica.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    BannerComponent,
    TecnologiaComponent,
    FooterComponent,
    HeaderComponent,
    MensajeDomoticaComponent,
    SeparadorComponent,
    CarrouselOpinionesComponent,
    FormularioContactoComponent,
    DomoticaComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    ButtonModule,
    CardModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    TecnologiaComponent,
    MensajeDomoticaComponent,
    SeparadorComponent,
    CarrouselOpinionesComponent,
    FormularioContactoComponent,
    DomoticaComponent
  ],

})
export class SharedModule { }
