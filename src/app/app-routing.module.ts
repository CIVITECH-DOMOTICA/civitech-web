import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeNosotrosComponent } from './features/acerca-de-nosotros/acerca-de-nosotros.component';
import { ContactanosComponent } from './features/contactanos/contactanos.component';

const routes: Routes = [
  { path: '', redirectTo: 'acerca-de-nosotros', pathMatch: 'full' },
  { path: 'acerca-de-nosotros', component: AcercaDeNosotrosComponent },
  { path: '**', redirectTo: 'acerca-de-nosotros' }
];

// const routes: Routes = [
//   { path: '', redirectTo: 'contactanos', pathMatch: 'full' },
//   { path: 'contactanos', component: ContactanosComponent },
//   { path: '**', redirectTo: 'contactanos' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
