import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoformComponent } from './fotografia/photoform/photoform.component';
import { PhotolistComponent } from './fotografia/photolist/photolist.component';

const routes: Routes = [
  {path: 'fotos', component: PhotolistComponent},
  {path: 'formulario', component: PhotoformComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
