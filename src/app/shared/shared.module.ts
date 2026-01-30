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
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { DomoticaComponent } from './components/domotica/domotica.component';
import { AppRoutingModule } from '../app-routing.module';
import { StatsCivitechComponent } from './components/stats-civitech/stats-civitech.component';
import { FaqCivitechComponent } from './components/faq-civitech/faq-civitech.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { EcosystemGridComponent } from './components/ecosystem-grid/ecosystem-grid.component';


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
    DomoticaComponent,
    WhatsappButtonComponent,
    StatsCivitechComponent,
    FaqCivitechComponent,
    CookieBannerComponent,
    NewsSectionComponent,
    EcosystemGridComponent
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
    AppRoutingModule,
    DialogModule
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
    DomoticaComponent,
    WhatsappButtonComponent,
    StatsCivitechComponent,
    FaqCivitechComponent,
    CookieBannerComponent,
    NewsSectionComponent,
    EcosystemGridComponent
  ]
})
export class SharedModule { }
