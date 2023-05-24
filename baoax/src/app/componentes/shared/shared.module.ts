import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MapComponent } from '../map/map.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
   
  ]
})
export class SharedModule { }
