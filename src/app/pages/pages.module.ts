import { NgModule } from "@angular/core";

//Modules
import { SharedModule } from '../shared/shared.module';

//Component principal
import { PagesComponent } from './pages.component';

//Component
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

//Rutas
import { PAGES_ROUTES } from './pages.routes';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
     SharedModule,
     PAGES_ROUTES  // se importar nuestrar rutas , cuando se exporte el modulo seran accesibles las paginas de esas rutas
    ]
})

export class PagesModule {}