import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
// import { HomepageComponent } from '../homepage/homepage.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent ],
  imports: [CommonModule,
  ],
  providers: [],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
