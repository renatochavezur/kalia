import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsPage } from './events.page';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  },
  {
    path: 'create-event',
    component: CreateEventComponent
  },
  {
    path: 'edit-event',
    component: EditEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsPageRoutingModule {}
