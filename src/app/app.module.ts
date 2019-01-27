import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { PayComponent } from './components/pay/pay.component';
import { RequestPaymentComponent } from './components/request-payment/request-payment.component';
import { AnotherBankComponent } from './components/another-bank/another-bank.component';
import { OwnBankComponent } from './components/own-bank/own-bank.component';
import { ValidationDirective } from './directive/validation.directive';
import { LoginComponent } from './components/login/login.component';
import { AdminPannelComponent } from './components/admin-pannel/admin-pannel.component';
import { PageComponent } from './components/page/page.component';
import { LoginGuard } from './guard/login.guard';
import { AdminCardPaymentComponent } from './components/admin-pannel/admin-card-payment/admin-card-payment.component';
import { AdminRequestPaymentComponent } from './components/admin-pannel/admin-request-payment/admin-request-payment.component';
import { AdminGuard } from './guard/admin.guard';
import { TokenInterceptorService } from './service/token.service';
import { LoginService } from './service/login.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'page' },
  {path: 'login', component: LoginComponent},
  {path: 'admin-pannel', component: AdminPannelComponent, canActivate: [AdminGuard], children:
    [
      {path: '', pathMatch: 'full', redirectTo: 'card-payment'},
      {path: 'admin-card-payment', component: AdminCardPaymentComponent},
      {path: 'admin-request-payment', component: AdminRequestPaymentComponent}
    ]
  },
  {path: 'page', component: PageComponent, canActivate: [LoginGuard], children:
    [
      {path: '', pathMatch: 'full', redirectTo:'pay'},
      { path: 'pay',
        component: PayComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'another-bank' },
          { path: 'another-bank', component: AnotherBankComponent },
          { path: 'own-bank', component: OwnBankComponent }
                  ]
      },
      { path: 'request-pay', component: RequestPaymentComponent }
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PayComponent,
    RequestPaymentComponent,
    AnotherBankComponent,
    OwnBankComponent,
    ValidationDirective,
    LoginComponent,
    AdminPannelComponent,
    PageComponent,
    AdminCardPaymentComponent,
    AdminRequestPaymentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [LoginService, LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
