import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { CasosExitoComponent } from './pages/casos-exito/casos-exito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'casos-exito', component: CasosExitoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: InicioComponent},
  {path: '', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
