import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';
import { EventsPage } from './events.page';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    MatChipsModule,
  ],
  declarations: [
    EventsPage,
    CreateEventComponent,
    EditEventComponent,
  ]
})
export class EventsPageModule {}
