import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeNosotrosComponent } from './features/acerca-de-nosotros/acerca-de-nosotros.component';
import { ContactanosComponent } from './features/contactanos/contactanos.component';
import { DomoticaInformacionComponent } from './features/domotica-informacion/domotica-informacion.component';
import { ProyectosComponent } from './features/proyectos/proyectos.component';
import { ProyectoDetalleComponent } from './features/proyecto-detalle/proyecto-detalle.component';
import { UseCaseDetalleComponent } from './features/use-case-detalle/use-case-detalle.component';
import { GraciasComponent } from './features/gracias/gracias.component';

const routes: Routes = [
  { path: '', redirectTo: '/acerca-de-nosotros', pathMatch: 'full' },
  { path: 'acerca-de-nosotros', component: AcercaDeNosotrosComponent },
  { path: 'domotica-informacion', component: DomoticaInformacionComponent },
  { path: 'domotica/:slug', component: UseCaseDetalleComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyectos/:slug', component: ProyectoDetalleComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'gracias', component: GraciasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
