import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LookEventPageRoutingModule } from './look-event-routing.module';

import { LookEventPage } from './look-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LookEventPageRoutingModule
  ],
  declarations: [LookEventPage]
})
export class LookEventPageModule {}
