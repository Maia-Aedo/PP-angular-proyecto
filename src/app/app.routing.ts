import { InicioComponent } from './inicio/inicio.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CasosExitoComponent } from './casos-exito/casos-exito.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path: 'Inicio', component: InicioComponent},
    {path: '', component: InicioComponent},
    {path: 'equipo', component: EquipoComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'casos-exito', component: CasosExitoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: InicioComponent}

];

