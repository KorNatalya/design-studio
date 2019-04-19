import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SystemComponent} from './system.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {MainLandingComponent} from './main-landing/main-landing.component';

const routes: Routes = [{
  path: '', component: SystemComponent, children: [
    {path: 'main-landing', component: MainLandingComponent},
    {path: 'contact-page', component: ContactPageComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {
}
