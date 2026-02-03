import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicioDetalleComponent } from './features/servicio-detalle/servicio-detalle.component';
import { ChatbotComponent } from './features/chatbot/chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicioDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FeaturesModule,
    BrowserAnimationsModule,
    ChatbotComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
