import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { SkyoneService } from './services/skyone.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule, MatProgressBarModule, MatSidenavModule, MatToolbarModule, MatIconModule,
  MatTableModule, MatPaginatorModule, MatBadgeModule, MatTooltipModule, MatListModule, MatInputModule
} from '@angular/material';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { HeaderComponent } from './header/header.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosListComponent,
    HeaderComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    RoutesRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatTooltipModule,
    MatListModule,
    MatInputModule
  ],
  providers: [SkyoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
