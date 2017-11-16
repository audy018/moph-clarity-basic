import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { ClarityModule } from 'clarity-angular';
import { FormsModule } from '@angular/forms';
import { BasicService } from '../services/basic.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ClarityModule,
    FormsModule
  ],
  providers: [BasicService],
  declarations: [LoginPageComponent]
})
export class LoginModule { }
