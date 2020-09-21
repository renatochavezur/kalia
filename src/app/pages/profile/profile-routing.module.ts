import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { AccountDataComponent } from './components/account-data/account-data.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'account-data',
    component: AccountDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
