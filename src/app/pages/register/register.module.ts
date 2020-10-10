import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';

import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    RegisterPageRoutingModule,
    MatChipsModule,
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
