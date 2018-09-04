import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosListComponent } from '../photos-list/photos-list.component';

const routes: Routes = [
  { path: '', component: PhotosListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
