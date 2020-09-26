import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { AccountDataComponent } from './components/account-data/account-data.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    NgxQRCodeModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  declarations: [
    ProfilePage,
    AccountDataComponent,
  ]
})
export class ProfilePageModule { }
