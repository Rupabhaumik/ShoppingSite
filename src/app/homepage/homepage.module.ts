import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [HomepageComponent  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    NgbModule,
  ]
})
export class HomepageModule { }
