import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AdminGuard, GuestGuard, LoginGuard} from './guard';
import {NotFoundComponent} from './not-found';
import {AccountMenuComponent} from './component/header/account-menu/account-menu.component';
import {ApiCardComponent, FooterComponent, HeaderComponent} from './component';

import {ApiService, AuthService, ConfigService, FooService, UserService} from './service';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {AdminComponent} from './admin/admin.component';
import {SignupComponent} from './signup/signup.component';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {MatIconRegistry} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/TokenInterceptor';
import { AdvertComponent } from './component/advert/advert.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { InboxComponent } from './inbox/inbox.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CodeBookComponent } from './code-book/code-book.component';
import { RentACarAdvertsComponent } from './rent-a-car-adverts/rent-a-car-adverts.component';

import { AdvertCardComponent } from './component/advert-card/advert-card.component';
import { AdvertDetailedComponent } from './advert-detailed/advert-detailed.component';
import { RequestsComponent } from './requests/requests.component';
import { DialogOverviewComponent } from './pricelist/dialog-overview/dialog-overview.component';
import { DialogNewpricelistComponent } from './pricelist/dialog-newpricelist/dialog-newpricelist.component';
import { ContentTableComponent } from './code-book/content-table/content-table.component';
import { EditItemDialogComponent } from './code-book/content-table/edit-item-dialog/edit-item-dialog.component';

import { UserConfigComponent } from './admin/user-config/user-config.component';
import { AdminStatisticsComponent } from './admin/admin-statistics/admin-statistics.component';
import { EditUserDialogComponent } from './admin/user-config/edit-user-dialog/edit-user-dialog.component';
import { DialogNewbonusComponent } from './pricelist/dialog-newbonus/dialog-newbonus.component';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { RequestTableComponent } from './requests/request-table/request-table.component';
import { MyRequestsComponent } from './requests/my-requests/my-requests.component';
import { RequestsForMeComponent } from './requests/requests-for-me/requests-for-me.component';
import { NewStatisticDataDialogComponent } from './requests/request-table/new-statistic-data-dialog/new-statistic-data-dialog.component';
import { EditPermissionsDialogComponent } from './admin/user-config/edit-permissions-dialog/edit-permissions-dialog.component';

@NgModule({
  declarations: [    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApiCardComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    AccountMenuComponent,
    ChangePasswordComponent,
    ForbiddenComponent,
    AdminComponent,
    SignupComponent,
    AdvertComponent,
    PricelistComponent,
    InboxComponent,
    UserProfileComponent,
    CodeBookComponent,
    RentACarAdvertsComponent,
    AdvertCardComponent,
    AdvertDetailedComponent,
    RequestsComponent,
    DialogOverviewComponent,
    DialogNewpricelistComponent,
    ContentTableComponent,
    EditItemDialogComponent,
    AdminStatisticsComponent,
    UserConfigComponent,
    EditUserDialogComponent,
    DialogNewbonusComponent,
    YesNoDialogComponent,
    RequestTableComponent,
    MyRequestsComponent,
    RequestsForMeComponent,
    NewStatisticDataDialogComponent,
    EditPermissionsDialogComponent
  
  ],
  imports: [
    
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    MatDialogModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    LoginGuard,
    GuestGuard,
    AdminGuard,
    FooService,
    AuthService,
    ApiService,
    UserService,
    ConfigService,
    MatIconRegistry,
  ],
  bootstrap: [AppComponent],
  entryComponents: [EditPermissionsDialogComponent, NewStatisticDataDialogComponent,YesNoDialogComponent,DialogNewbonusComponent,EditUserDialogComponent,DialogOverviewComponent, DialogNewpricelistComponent,EditItemDialogComponent]
})
export class AppModule {
}
