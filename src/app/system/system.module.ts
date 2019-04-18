import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import { HomeScreenComponent } from './main-landing/home-screen/home-screen.component';
import { AboutUsComponent } from './main-landing/about-us/about-us.component';
import { SkillsComponent } from './main-landing/skills/skills.component';
import { PortfolioComponent } from './main-landing/portfolio/portfolio.component';
import { FooterComponent } from './main-landing/footer/footer.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatProgressBarModule
} from '@angular/material';
import { FormComponent } from './main-landing/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    MatListModule,
    MatButtonModule,
    MatProgressBarModule,
    MatGridListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    SystemComponent,
    HomeScreenComponent,
    AboutUsComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent,
    FormComponent
  ],
  providers: []
})

export class SystemModule {

}
