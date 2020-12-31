import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { HomeScreenComponent } from './main-landing/home-screen/home-screen.component';
import { AboutUsComponent } from './main-landing/about-us/about-us.component';
import { SkillsComponent } from './main-landing/skills/skills.component';
import { PortfolioComponent } from './main-landing/portfolio/portfolio.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormComponent } from './main-landing/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FeedbackFormComponent } from './shared/components/feedback-form/feedback-form.component';
import { WorkProcessComponent } from './main-landing/work-process/work-process.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CarouselComponent } from './main-landing/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap';
import { AboutPageComponent } from './about-page/about-page.component';
import { StatisticsComponent } from './shared/components/statistics/statistics.component';
import { ProjectsComponent } from './shared/components/projects/projects.component';
import { ImageViewerComponent } from './shared/components/projects/image-viewer/image-viewer.component';
import { RangeOfServicesComponent } from './main-landing/range-of-services/range-of-services.component';
import { ClientsComponent } from './main-landing/clients/clients.component';

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
    MatInputModule,
    CarouselModule,
    MatDialogModule,
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
    ProjectsPageComponent,
    CarouselComponent,
    AboutPageComponent,
    StatisticsComponent,
    ProjectsComponent,
    ImageViewerComponent,
    RangeOfServicesComponent,
    ClientsComponent,
  ],
  providers: [],
  entryComponents: [ImageViewerComponent],
})
export class SystemModule {}
