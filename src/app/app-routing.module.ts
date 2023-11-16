import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FestivosComponent } from './componentes/festivos/festivos.component';

const routes: Routes = [
  { path: 'festivos', component: FestivosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'festivos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
