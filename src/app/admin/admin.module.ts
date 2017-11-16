import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewUserComponent } from './new-user/new-user.component';
import { CreditComponent } from './credit/credit.component';
import { LayoutComponent } from './layout/layout.component';
import { UserService } from './user.service';
import { ClarityModule } from 'clarity-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ClarityModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    PageNotFoundComponent,
    NewUserComponent,
    CreditComponent,
    LayoutComponent
  ],
  providers: [UserService]
})
export class AdminModule { }