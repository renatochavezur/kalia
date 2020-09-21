import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchEventPage } from './search-event.page';
import { EventComponent } from './components/event/event.component';

const routes: Routes = [
  {
    path: '',
    component: SearchEventPage
  },
  {
    path: 'event',
    component: EventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchEventPageRoutingModule {}
