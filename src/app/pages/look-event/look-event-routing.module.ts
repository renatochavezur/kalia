import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LookEventPage } from './look-event.page';

const routes: Routes = [
  {
    path: '',
    component: LookEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LookEventPageRoutingModule {}
