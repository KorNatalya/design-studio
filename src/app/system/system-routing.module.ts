import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      { path: 'main-landing', component: MainLandingComponent },
      { path: 'contact-page', component: ContactPageComponent },
      { path: 'projects-page', component: ProjectsPageComponent },
      { path: 'about-page', component: AboutPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
