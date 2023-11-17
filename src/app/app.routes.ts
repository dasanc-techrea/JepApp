import { Routes } from '@angular/router';

import {GetPersonasComponent} from './get-personas/get-personas.component';
import {GetProcesosPersonaComponent} from './get-procesos-persona/get-procesos-persona.component';
import {GetDetalleProcesoComponent} from './get-detalle-proceso/get-detalle-proceso.component';
import {PersonasDireccionDesarrolloComponent} from './personas-direccion-desarrollo/personas-direccion-desarrollo.component';
import {PersonasTelefonoDesarrolloComponent} from './personas-telefono-desarrollo/personas-telefono-desarrollo.component';
import {PersonaComponent} from './persona/persona.component';
import {PartesProcesoComponent} from './partes-proceso/partes-proceso.component';
import {AsociadosProcesoComponent} from './asociados-proceso/asociados-proceso.component';

export const routes: Routes = [

    { path: 'getPersonas', component: GetPersonasComponent},
    { path: 'getProcesosPersona', component: GetProcesosPersonaComponent},
    { path: 'getDetalleProceso', component: GetDetalleProcesoComponent},
    { path: 'personasDireccionDesarrollo', component: PersonasDireccionDesarrolloComponent},
    { path: 'personasTelefonoDesarrollo', component: PersonasTelefonoDesarrolloComponent},
    { path: 'persona', component: PersonaComponent},
    { path: 'partesProceso', component: PartesProcesoComponent},
    { path: 'asociadosProceso', component: AsociadosProcesoComponent}

];
