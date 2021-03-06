import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AdminComponent} from './admin';
import {AdminGuard, GuestGuard, LoginGuard} from './guard';
import {NotFoundComponent} from './not-found';
import {ChangePasswordComponent} from './change-password';
import {ForbiddenComponent} from './forbidden';
import {SignupComponent} from './signup';
import {AdvertComponent} from './component/advert';
import { CodeBookComponent } from './code-book/code-book.component';
import { AdvertDetailedComponent } from './advert-detailed/advert-detailed.component';
import { RequestsComponent } from './requests/requests.component';
import { AdminStatisticsComponent } from './admin/admin-statistics/admin-statistics.component';
import { UserConfigComponent } from './admin/user-config/user-config.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { MyRequestsComponent } from './requests/my-requests/my-requests.component';
import { RequestsForMeComponent } from './requests/requests-for-me/requests-for-me.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'advert',
    component: AdvertComponent,
    canActivate: [LoginGuard]   

  },
  {
    path: 'codebook',
    component: CodeBookComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [GuestGuard],
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },{
    path: 'codebook',
    component: CodeBookComponent
  },{
    path:'statistic',
    component: AdminStatisticsComponent
  },{
    path:'user-config',
    component: UserConfigComponent
  },{
    path:'my-pricelists',
    component: PricelistComponent
  }
  ,
  {
    path: 'advert-page',
    component: AdvertDetailedComponent,    
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'my-ads',
    component: AdvertComponent
  },
  {
    path: 'my-requests',
    component: MyRequestsComponent
  },
  {
    path: 'requests-for-me',
    component: RequestsForMeComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '403',
    component: ForbiddenComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
