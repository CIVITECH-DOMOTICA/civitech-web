import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeNosotrosComponent } from './features/acerca-de-nosotros/acerca-de-nosotros.component';
import { ContactanosComponent } from './features/contactanos/contactanos.component';
import { DomoticaInformacionComponent } from './features/domotica-informacion/domotica-informacion.component';
import { ProyectosComponent } from './features/proyectos/proyectos.component';
import { GraciasComponent } from './features/gracias/gracias.component';
import { DetalleDomoticaComponent } from './features/detalle-domotica/detalle-domotica.component';
import { DetalleProyectoComponent } from './features/detalle-proyecto/detalle-proyecto.component';

const routes: Routes = [
  { path: '', redirectTo: '/acerca-de-nosotros', pathMatch: 'full' },
  { path: 'acerca-de-nosotros', component: AcercaDeNosotrosComponent },
  { path: 'domotica-informacion', component: DomoticaInformacionComponent },
  { path: 'domotica/:id', component: DetalleDomoticaComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyectos/:id', component: DetalleProyectoComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'gracias', component: GraciasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false,  scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
