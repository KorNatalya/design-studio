import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import { HomeScreenComponent } from './main-landing/home-screen/home-screen.component';
import { AboutUsComponent } from './main-landing/about-us/about-us.component';
import { SkillsComponent } from './main-landing/skills/skills.component';
import { PortfolioComponent } from './main-landing/portfolio/portfolio.component';
import { FooterComponent } from './main-landing/footer/footer.component';
import {MatButtonModule, MatListModule, MatProgressBarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    MatListModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  declarations: [
    SystemComponent,
    HomeScreenComponent,
    AboutUsComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent
  ],
  providers: []
})

export class SystemModule {

}
