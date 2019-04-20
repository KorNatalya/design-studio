import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import { HomeScreenComponent } from './main-landing/home-screen/home-screen.component';
import { AboutUsComponent } from './main-landing/about-us/about-us.component';
import { SkillsComponent } from './main-landing/skills/skills.component';
import { PortfolioComponent } from './main-landing/portfolio/portfolio.component';
import { FooterComponent } from './shared/components/footer/footer.component';
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
import {MainLandingComponent} from './main-landing/main-landing.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FeedbackFormComponent } from './shared/components/feedback-form/feedback-form.component';
import { WorkProcessComponent } from './main-landing/work-process/work-process.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';

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
    FormComponent,
    ContactPageComponent,
    MainLandingComponent,
    HeaderComponent,
    FeedbackFormComponent,
    WorkProcessComponent,
    ProjectsPageComponent
  ],
  providers: []
})

export class SystemModule {

}
