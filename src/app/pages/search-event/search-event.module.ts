import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SearchEventPageRoutingModule } from './search-event-routing.module';
import { SearchEventPage } from './search-event.page';
import { EventComponent } from './components/event/event.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchEventPageRoutingModule
  ],
  declarations: [
    SearchEventPage,
    EventComponent,
  ]
})
export class SearchEventPageModule {}
