import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MatChipsModule } from '@angular/material/chips';
import { SearchEventPageRoutingModule } from './search-event-routing.module';
import { SearchEventPage } from './search-event.page';
import { EventComponent } from './components/event/event.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchEventPageRoutingModule,
    MatChipsModule,
  ],
  declarations: [
    SearchEventPage,
    EventComponent,
  ]
})
export class SearchEventPageModule {}
